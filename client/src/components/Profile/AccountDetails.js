import React from 'react'

const AccountDetails = ({ username, address, small_kids, own_pets, space }) => {
  return (
    <div>
      <h1>Username: {username}</h1>
      <p>Address: {address}</p>
      <p>Small Kids: {small_kids}</p>
      <p>Pets: {own_pets}</p>
      <p>Space: {space}</p>
    </div>
  )
}

export default AccountDetails