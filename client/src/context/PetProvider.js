import React, { useState, useEffect } from "react";

const PetContext = React.createContext();

function PetProvider ({ children })  {
  const [pets, setPets] = useState([]);
  

  useEffect(() => {
    fetch("/pets") 
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
