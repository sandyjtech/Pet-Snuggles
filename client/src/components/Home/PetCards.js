import React, { useContext } from 'react';
import PetCardItem from './PetCardItem';
import { PetContext } from "../../context/PetProvider"
import Grid from '@mui/material/Grid';


const PetCards = () => {
  const { pets } = useContext(PetContext);
  //console.log(pets)
  

  const petCards = pets.map((pet) => (
    <Grid item xs={12} sm={6} md={4} key={pet.id}>
      <PetCardItem key={pet.id} {...pet} />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {petCards}
    </Grid>
);
}

export default PetCards;
