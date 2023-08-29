import React, { useState, useEffect } from 'react';

const AcountDetails = ({ username, address, small_kids, own_pets, space}) => {

  return (
    <div>
      <p>{username}</p>
      <p>{address}</p>
      <p>{small_kids}</p>
      <p>{own_pets}</p>
      <p>{space}</p>
    </div>
  )
}

export default AcountDetails
