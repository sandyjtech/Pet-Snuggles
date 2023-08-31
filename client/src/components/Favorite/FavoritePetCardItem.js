import React, {useState} from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Button from '@mui/material/Button';

const FavoritePetCardItem = ({ image, name,  }) => {
  
  const EmptyHeart= () => {
    const [isFilled, setIsFilled] = useState(false);
  
    const handleClick = () => {
      console.log('handleClick')
      setIsFilled(!isFilled);
      
    };
  
    return (
        <a href onClick={handleClick}>
          {isFilled ? <FavoriteIcon style={{ color: 'red' }}/> : <FavoriteBorderOutlinedIcon style={{ color: 'red' }}/>}
        </a>
    );
  }

  return (
    <div>
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

export default FavoritePetCardItem