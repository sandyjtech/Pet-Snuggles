import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUserAuth } from './UserAuthProvider';

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

const FavoritesProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);
  const { checkAuthorized } = useUserAuth();
  const { user } = useUserAuth();
  const [favoritePets, setFavoritePets] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (user) {
      fetch(`/users/${user.id}/favorites`)
        .then(response => response.json())
        .then(data => {
          console.log('Fetched data:', data);
          setFavoritePets(data);
        })
        .catch(error => console.error('Error fetching favorite pets:', error));
    }
  }, [user]);
console.log(favoritePets)

  function handleAddFavorite(userId, petId) {
    fetch("/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: user.id, pet_id: petId }),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((favorite) => {
          setFavorite(favorite);
          checkAuthorized();
        });
      } else {
        r.json().then((err) => console.log(err));
      }
    });
  }

  function handleRemoveFavorite(petId) {
    fetch(`/favorites/${petId}`, {
      method: "DELETE",
    })
      .then((r) => {
        if (r.ok) {
          setFavoritePets((prevFavorites) =>
            prevFavorites.filter((favorite) => favorite.pet_id !== petId)
          );
          setRefreshKey((prevKey) => prevKey + 1); 
        } else {
          r.json().then((err) => console.log(err));
        }
      });
  }
  
  
  const contextValue = {
    handleAddFavorite,
    favorite,
    setFavorite,
    favoritePets,
    handleRemoveFavorite,
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
