import React, { useContext } from 'react';
import PetCardItem from './PetCardItem';
import { PetContext } from "../../context/PetProvider"

const PetCards = () => {
  const { pets } = useContext(PetContext);
  
  //console.log(pets)
  
  const petCards = pets.map((pet) => (
    <PetCardItem key={pet.id} {...pet} />
  ));

  return <div>{petCards}</div>;
};

export default PetCards;
