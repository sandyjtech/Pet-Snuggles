import React from "react";
import { Switch, Route, } from "react-router-dom";
import Main from './Main'
import { PetProvider } from "../context/PetProvider";
import HomeContainer from './Home/HomeContainer';
import PetProfile from './PetProfile';
import ProfileContainer from './Profile/ProfileContainer';
import ScheduleContainer from './Schedule/ScheduleContainer'
import FavoritesContainer from './Favorite/FavoritesContainer'
import Footer from './Footer';



function App() {
  
  return (
  <div>
    <Switch>
    <PetProvider>
      <Route path="/" element={ <HomeContainer />}/>
      <Route path="/pet-profile" element={ <PetProfile />}/>
      <Route path="/profile" element={ <ProfileContainer />} />
      <Route path="/schedule" elemnet={ <ScheduleContainer />}/>
      <Route path="/favorites" element={ <FavoritesContainer/>}/>
      </PetProvider>
    </Switch>
    <Main></Main>
    <Footer></Footer>
  </div>
)
}

export default App;
