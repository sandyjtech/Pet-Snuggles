import React from 'react'

const AccountDetails = ({ username, address, small_kids, own_pets, space }) => {
  const smallKidsText = small_kids ? 'Yes' : 'No';
  const ownPetsText = own_pets ? 'Yes' : 'No';
  
  return (
    <div>
      <h1>Username: {username}</h1>
      <p>Address: {address}</p>
      <p>Small Kids: {smallKidsText}</p>
      <p>Pets: {ownPetsText}</p>
      <p>Space: {space}</p>
    </div>
  )
}

export default AccountDetails
