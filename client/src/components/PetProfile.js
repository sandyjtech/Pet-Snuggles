import React, { useState } from 'react';
import { Button } from '@mui/base';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Time from './Times.js';


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
      <h1 className="header">Booking Calendar</h1>
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
      <span>Default selected date:</span>{date.toDateString()}
   </p> 
          )
   }
   <Time showTime={showTime} date={date}/>

 </div>
 </div>
  )
}


export default PetProfile

