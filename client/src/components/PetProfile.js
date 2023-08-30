import React, { useState } from 'react';
import { Button } from '@mui/base';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Times from './Times.js';


const PetProfile = ({ animal_type, name, age, breed, sex, size, temperament, good_wt_kids, good_wt_pets, image, adoption_link }) => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false) 


  return (
    <div>
      <h2>{animal_type}</h2>
      <p>{image}</p>
      <h2>Name:{name}</h2>
      <p>Age:{age}</p>
      <p>Breed:{breed}</p>
      <p>Gender:{sex}</p>
      <p>Size:{size}</p>
      <p>Temperament:{temperament}</p>
      <p>Good with Kids:{good_wt_kids}</p>
      <p>Good with other pets: {good_wt_pets}</p>
    <Link to={adoption_link}><Button>Adopt</Button>
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
