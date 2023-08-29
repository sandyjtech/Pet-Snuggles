import React, { useEffect, useState } from 'react'
import Header from './Header'



const Main = () => {

  const [pets, setPets] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/pets')
      .then(response => response.json())
      .then((pets) => setPets(pets))
  }, [])

return (
    <div>
      <Header></Header>
    </div>
  )
}

export default Main
