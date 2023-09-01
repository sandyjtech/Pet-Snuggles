import React from 'react';
import FavoritePetCardItem from './FavoritePetCardItem';
import Grid from '@mui/material/Grid';
import { useFavorites } from '../../context/FavoritesProvider';

const FavoritePetCards = ({ pets }) => {
  const {favoritePets} = useFavorites();

  const FavoritePetCardItems = favoritePets.map((pet) => (
    <Grid item xs={12} sm={6} md={4} key={pet.id}>
      <FavoritePetCardItem key={pet.id} {...pet} />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {FavoritePetCardItems}
    </Grid>
  );
}

export default FavoritePetCards;
