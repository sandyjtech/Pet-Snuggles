import React, { useState, useEffect } from 'react';
import Header from '../Header'
import AccountDetails from './AccountDetails'

const MyProfile = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/users')
      .then(response => response.json())
      .then((users) => setUsers(users))
  }, [])
  return (
    <div>
      <Header></Header>
      <AccountDetails></AccountDetails>
    </div>
  )
}

export default MyProfile
