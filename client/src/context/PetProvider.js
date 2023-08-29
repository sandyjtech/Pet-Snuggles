import React, { createContext, useContext, useState } from 'react';

const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  // Other state for user interactions, favorites, etc.

  return (
    <PetContext.Provider value={{ pets, setPets }}>
      {children}
    </PetContext.Provider>
  );
};

export const usePetContext = () => {
  return useContext(PetContext);
};