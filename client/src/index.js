import React from "react";
import ReactDOM from "react-dom/client"; // Import from "react-dom/client" instead of "react-dom"
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import { PetProvider } from "./context/PetProvider";
import UserAuthProvider  from "./context/UserAuthProvider"; // Make sure to use the correct import path
import FavoritesProvider from "./context/FavoritesProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserAuthProvider>       
        <PetProvider>
        <FavoritesProvider>
          <App />
          </FavoritesProvider>
        </PetProvider>        
      </UserAuthProvider>
    </BrowserRouter>
  </React.StrictMode>


);

