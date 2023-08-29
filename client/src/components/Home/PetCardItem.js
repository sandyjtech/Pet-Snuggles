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

const PetCardItem = ({ Photo, Name, }) => {
  return (
    <div>
      <img
        src={Photo}
        alt={Name}
        height={260}
        width={260} 
        overflow hidden
            />
      <h2>{Name}</h2>
      <EmptyHeart align='right'/>
      <Button>Book</Button>
    </div>
  )
}

export default PetCardItem
