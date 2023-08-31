// Main.js
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './Home/HomeContainer';
import PetProfile from './PetProfile';
import ProfileContainer from './Profile/ProfileContainer';
import ScheduleContainer from './Schedule/ScheduleContainer';
import FavoritesContainer from './Favorite/FavoritesContainer';

export default function Main() {
  
  return (
    <div>
      <Switch>
        <Route path="/pets/:id" ><PetProfile/> </Route>
        <Route path="/profile/:id" ><ProfileContainer/> </Route>
        <Route path="/schedule"  ><ScheduleContainer/></Route>
        <Route path="/favorites"  ><FavoritesContainer/> </Route>
        <Route path="/"><HomeContainer /></Route>
      </Switch>
    </div>
  );
}

