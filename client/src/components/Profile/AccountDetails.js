import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const AccountDetails = () => {
    const {id} = useParams()
    const [profile, setProfile] = useState([])
    
    useEffect(() => {
    fetch(`/profile/${id}`)
        .then(res => res.json())
        .then((profile) => {setProfile(profile);});
}, [id])

  return (
    <div>
      <h1>Username: {profile.username}</h1>
      <p>Address: {profile.address}</p>
      <p>Small Kids: {profile.small_kids}</p>
      <p>Pets: {profile.own_pets}</p>
      <p>Space: {profile.space}</p>
    </div>
  )
}

export default AccountDetails