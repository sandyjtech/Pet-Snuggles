import React from 'react'
import PetCardItem from './PetCardItem'

const PetCards = ({ pets }) => {

  const petCards = pets.map((pet) => {
    return <PetCardItem key={pet.id} {...pet}/>
  })
    
  return (
      <div>
        {petCards}
      </div>
  )
}

export default PetCards
