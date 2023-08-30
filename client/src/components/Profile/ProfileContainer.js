import React, { useState, useEffect } from "react";
import Header from "../Header";
import AccountDetails from "./AccountDetails";
import { useParams } from "react-router-dom"; // Import useParams to get user ID

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams(); // Get the user ID from the route params

  useEffect(() => {
    fetch(`/users/${id}`) // Fetch user data based on the ID
      .then(response => response.json())
      .then(user => setUser(user));
  }, [id]);

  return (
    <div>
      <Header />
      {user && (
        <AccountDetails
          username={user.username}
          address={user.address}
          small_kids={user.small_kids}
          own_pets={user.own_pets}
          space={user.space}
        />
      )}
    </div>
  );
};

export default MyProfile;