import React, { useEffect, useState } from "react";
import { Switch, Route, } from "react-router-dom";
import Main from './Main'
import HomeContainer from './Home/HomeContainer';
import PetProfile from './Home/PetProfile';
import ProfileContainer from './Profile/ProfileContainer';
import ScheduleContainer from './Schedule/ScheduleContainer'
import FavoritesContainer from './Favorite/FavoritesContainer'
import Footer from './Footer';



function App() {
  
  return (
  <div>
    <Switch>
      <Route path="/" element={ <HomeContainer />}/>
      <Route path="/pet-profile" element={ <PetProfile />}/>
      <Route path="/profile" element={ <ProfileContainer />} />
      <Route path="/schedule" elemnet={ <ScheduleContainer />}/>
      <Route path="/favorites" element={ <FavoritesContainer/>}/>
    </Switch>
    <Main></Main>
    <Footer></Footer>
  </div>
)
}

export default App;
