import React from 'react'
import { Button } from '@mui/base'
import { Link } from 'react-router-dom'

const PetProfile = ({ animal_type, name, age, breed, sex, size, temperament, good_wt_kids, good_wt_pets, image, adoption_link }) => {
  return (
    <div>
      <h2>{animal_type}</h2>
      <p>{image}</p>
      <h2>Name:{name}</h2>
      <p>Age:{age}</p>
      <p>Breed:{breed}</p>
      <p>Gender:{sex}</p>
      <p>Size:{size}</p>
      <p>Temperament:{temperament}</p>
      <p>Good with Kids:{good_wt_kids}</p>
      <p>Good with other pets: {good_wt_pets}</p>
      <Link to={adoption_link}><Button>Adopt</Button>
      </Link>


    </div>
  )
}

export default PetProfile
