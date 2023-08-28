import React, {useEffect, useState} from 'react'
import Header from './Header'
import PetCard from'./PetCard'
import Footer from './Footer'

const Main = () => {
  const [pet, setPet] = useState([])

  useEffect(() => {
    fetch('/pets')
    .then(response => response.json())
    .then(setPet)
  }, [])

  return (
    <div>
      <Header></Header>
      <PetCard></PetCard>
      <Footer></Footer>
    </div>
  )
}

export default Main
