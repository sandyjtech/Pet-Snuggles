import React from 'react'
import PetCards from './PetCards'
import Header from '../Header'
import { usePetContext } from '../../context/PetProvider'


const Home = () => {
  const { pets } = usePetContext();
  return (
    <div>
      <Header></Header>
      <PetCards pets={pets}></PetCards>
    </div>
  )
}

export default Home