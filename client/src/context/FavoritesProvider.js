// FavoritesProvider.js
import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

const FavoritesProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([])

function handleAddFavorite (user_id, pet_id)  {
    fetch("/favorites", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({user_id, pet_id})
    }).then((r) => {
        if (r.ok) {
            r.json().then((favorite) => setFavorite(favorite));
          } else {
            r.json().then((err) => console.log(err));
          }
    })
}


console.log(favorite)

  const contextValue = {
    handleAddFavorite,
    favorite,
    setFavorite,

  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;