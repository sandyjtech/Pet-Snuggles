import React, { useState, useEffect } from 'react';
import Header from '../Header';
import FavoritePetCards from './FavoritePetCards';
import { useFavorites } from "../../context/FavoritesProvider";

const Favorites = () => {
  const { favorite } = useFavorites();
  const [favoritePets, setFavoritePets] = useState([]);

  useEffect(() => {
    // Fetch favorite pets from the context
    setFavoritePets(favorite);
  }, [favorite]);

  return (
    <div>
      <Header />
      <FavoritePetCards pets={favoritePets} />
    </div>
  );
}

export default Favorites
