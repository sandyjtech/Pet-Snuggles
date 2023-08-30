import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./components/App";
import { PetProvider } from "./context/PetProvider";
import UserAuthProvider from "./context/UserAuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserAuthProvider>
        <PetProvider>
          <App />
        </PetProvider>
      </UserAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  );
