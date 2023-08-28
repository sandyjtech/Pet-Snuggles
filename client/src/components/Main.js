import React, {useEffect, useState} from 'react'

const Main = () => {
  const [pet, setPet] = useState([])

  useEffect(() => {
    fetch('/pets')
    .then(response => response.json())
    .then(setPet)
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default Main
