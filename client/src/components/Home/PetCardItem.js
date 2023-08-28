import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

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

const PetCardItem = () => {
  return (
    <div>
      
      <EmptyHeart align='right'/>
    </div>
  )
}

export default PetCardItem
