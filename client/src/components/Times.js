import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Calendar from 'react-calendar';
import './PetProfile';


const time = ['08:00','09:00','10:00','11:00', '12:00', '1:00','2:00', '3:00', '4:00']

function Times(props) {

 const [event, setEvent] = useState(null)
 const [info, setInfo] = useState(false)

 function displayInfo(e) {
   setInfo(true);
   setEvent(e.target.innerText);
}

return (
 
 <div className="times">
   {time.map(times => {
    return (
    <div>
      <Button variant="outlined" onClick={(e)=> displayInfo(e)}> {times} </Button>
    </div>
        )
     })}
    <div>
      {info ? `Your snuggle is set to ${event} ${props.date.toDateString()}` : null}
    </div>
 </div>
  )
}


export default Times;