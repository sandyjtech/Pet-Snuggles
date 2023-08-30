import React, { useContext, useState } from 'react';
import PetCardItem from './PetCardItem';
import { PetContext } from "../../context/PetProvider"
import Grid from '@mui/material/Grid';

const PetCards = () => {
  const { pets } = useContext(PetContext);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Filter the pets based on the search term
  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const petCards = filteredPets.map(pet => (
    <Grid item xs={12} sm={6} md={4} key={pet.id}>
      <PetCardItem key={pet.id} {...pet} />
    </Grid>
  ));

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search pets by name"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {/* Display pet cards */}
      <Grid container spacing={2}>
        {petCards}
      </Grid>
    </div>
  );
};

export default PetCards;
