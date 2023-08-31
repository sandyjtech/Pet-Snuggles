import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Times from './Times.js';
import Divider from '@mui/material/Divider';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';

const cardStyle = {
  boxShadow: 'none',
  paddingLeft: '16px',
  
}
const PetProfile = () => {
  const {id} = useParams();
  const [pet, setPet] = useState([]);
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const smallKidsText = pet.good_wt_kids ? 'Yes' : 'No';
  const ownPetsText = pet.good_wt_pets ? 'Yes' : 'No';
  
  useEffect(() => {
    fetch(`/pets/${id}`)
        .then(res => res.json())
        .then((pet) => {setPet(pet);});
}, [id])
if (!pet){
  return <h2>loading</h2>
}
  return (
    <div>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Card sx={{ width: 'auto', ...cardStyle }}>
          <CardContent><h1>{pet.name}</h1>
            <img src={pet.image} alt="Pet" />
          </CardContent>
      </Card>
      <Card sx={{ width: 'auto', ...cardStyle }}>
        <CardContent>
          <h3>{pet.animal_type}</h3>
          <p>Age: {pet.age}</p>
          <p>Breed: {pet.breed}</p>
          <p>Gender: {pet.sex}</p>
          <p>Size: {pet.size}</p>
          <p>Temperament: {pet.temperament}</p>
          <p>Small Kids: {smallKidsText}</p>
          <p>Pets: {ownPetsText}</p>
        </CardContent>
        <CardActions>
          <a href={pet.adoption_link}>
            <Button variant="outlined">Adopt</Button>
          </a>
        </CardActions>
      </Card>
      <Divider />
      <Card sx={{ width: 'auto', ...cardStyle }}>
        <div className="calendar">
          <h3 className="header"> Booking Calendar</h3>
        <div className="calendar-container">
        <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
      </div>
      {date.length > 0 ? (
        <p>
        <span>Start:</span>
          {date[0].toDateString()}
            &nbsp;
            &nbsp;
        <span>End:</span>
          {date[1].toDateString()}
        </p>
          ) : (
        <p>
          <span>date: </span>
            {date.toDateString()}
        </p> 
          )
        }
        </div>
        </Card>
        <Card sx={{ width: 'auto', ...cardStyle }}>
          <p></p>
        <Times showTime={showTime} date={date}/>
        <p></p>
        <Link to="/schedule"><Button variant="outlined">Schedule a Snuggle</Button></Link>
        </Card>
      </Grid>
      </div>
  )
}


export default PetProfile

