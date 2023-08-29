import React, { useState, useEffect } from "react";

const PetContext = React.createContext();

function PetProvider ({ children })  {
  const [pets, setPets] = useState([]);
  // Other state for user interactions, favorites, etc.

  useEffect(() => {
    fetch("http://127.0.0.1:5555/pets") // Use the correct API endpoint here
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        throw r;
      })
      .then((pets) => setPets(pets));
      
  }, []);
//console.log(pets);
  const contextValue = {
    pets,
    setPets
  };
  return (
    <PetContext.Provider value={contextValue}>
      {children}
    </PetContext.Provider>
  );
};

export {PetContext, PetProvider };
