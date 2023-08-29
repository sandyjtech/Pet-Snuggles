import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Button from '@mui/material/Button';

const EmptyHeart= () => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  return (
      <a onClick={handleClick}>
        {isFilled ? <FavoriteIcon style={{ color: 'red' }}/> : <FavoriteBorderOutlinedIcon style={{ color: 'red' }}/>}
      </a>
  );
}
//turn into a button, add to user id, sent to database favorites, userid, petid

const PetCardItem = ({ name, image }) => {
  return (
    <div>
     <h1>test</h1>
      <img
        src={image}
        alt={name}
        height={260}
        width={260} 
        overflow hidden
            />
      <h2>{name}</h2>
      <EmptyHeart align='right'/>
      <Button>Book</Button>
    </div>
  )
}
//need to add route to button

export default PetCardItem
