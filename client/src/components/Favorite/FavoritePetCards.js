import React from 'react'
import FavoritePetCardItem from './FavoritePetCardItem'

const FavoritePetCards = ({ pets }) => {
  
  const FavoritePetCards = pets.map((pet) => {
    return <FavoritePetCardItem key={pet.id} {...pet}/>
  })
    
  return (
      <div>
        {FavoritePetCards}
      </div>
  )
}

export default FavoritePetCards

//need to figure out how to fetch just the hearted pets, favorited pets for this user