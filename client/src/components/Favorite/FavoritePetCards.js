import React from 'react';
import FavoritePetCardItem from './FavoritePetCardItem';
import Grid from '@mui/material/Grid';
import { useFavorites } from '../../context/FavoritesProvider';
//import { useParams } from 'react-router-dom';

const FavoritePetCards = ({ pets }) => {
  const {favorite} = useFavorites();


  const FavoritePetCards = favorite.map((pet) => (
    <Grid item xs={12} sm={6} md={4} key={pet.id}>
      <FavoritePetCardItem key={pet.id} {...pet}  />
    </Grid>
  ));
  
  return (
    <Grid container spacing={2}>
      {FavoritePetCards}
    </Grid>
  )
}

export default FavoritePetCards

//need to figure out how to fetch just the hearted pets, favorite pets for this user