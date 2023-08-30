import React, { useState, useEffect } from 'react';
import { Button } from '@mui/base';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Times from './Times.js';
import { useParams } from 'react-router-dom';


const PetProfile = () => {
  const {id} = useParams()
  const [pet, setPet] = useState([])
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false) 
  
  useEffect(() => {
    fetch(`/pets/id=${id}`)
        .then(res => res.json())
        .then((pet) => {
          console.log('Pet data:', pet); // Add this line to check the data
          setPet(pet[0]);
        });
}, [])

  return (
    <div>
      <h2>{pet.animal_type}</h2>
      <p>{pet.image}</p>
      <h2>Name:{pet.name}</h2>
      <p>Age:{pet.age}</p>
      <p>Breed:{pet.breed}</p>
      <p>Gender:{pet.sex}</p>
      <p>Size:{pet.size}</p>
      <p>Temperament:{pet.temperament}</p>
      <p>Good with Kids:{pet.good_wt_kids}</p>
      <p>Good with other pets: {pet.good_wt_pets}</p>
    <Link to={pet.adoption_link}><Button>Adopt</Button>
    </Link>
      <div className="calendar">
        <h2 className="header">Booking Calendar</h2>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
      </div>
      {date.length > 0 ? (
   <p>
     <span>Start:</span>
     {date[0].toDateString()}
     &nbsp;
     &nbsp;
     <span>End:</span>{date[1].toDateString()}
   </p>
          ) : (
   <p>
      <span>Selected date: </span>{date.toDateString()}
   </p> 
          )
   }
   <Times showTime={showTime} date={date}/>
   <Link to="/schedule"><Button>Schedule a Snuggle</Button></Link>

 </div>
 </div>
  )
}
//schedule a snuggle needs to go to user schedule and persist

export default PetProfile
