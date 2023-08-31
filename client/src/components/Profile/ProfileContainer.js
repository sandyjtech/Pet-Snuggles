import React, { useEffect } from "react";
import Header from "../Header";
import AccountDetails from "./AccountDetails";
import { useParams } from "react-router-dom"; // Import useParams to get user ID
import { useUserAuth } from "../../context/UserAuthProvider";

const ProfileContainer = () => {
  const { user, setUser } = useUserAuth(); 
  const { id } = useParams(); 

  useEffect(() => {
    fetch(`/users/${id}`) // Use the 'id' from useParams
      .then(response => response.json())
      .then(user => setUser(user))
      .catch(error => {
        // Handle error, e.g., setUser(null) or show an error message
        console.error("Error fetching user:", error);
      });
  }, [id, setUser]);

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

export default ProfileContainer;