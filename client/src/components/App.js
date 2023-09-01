import React, {useEffect} from "react";
import Main from './Main'
import Footer from './Footer';
import { useUserAuth } from "../context/UserAuthProvider";

function App() {
  const {checkAuthorized} = useUserAuth();

  useEffect(() => {
    checkAuthorized();
  }, [])

  return (
    <div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
