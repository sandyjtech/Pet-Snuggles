import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; 
import {useFavorites} from '../../context/FavoritesProvider'

const FavoritePetCardItem = ({ image, name, id, adoption_link }) => {
  const { handleRemoveFavorite } = useFavorites(); 

  const [isFilled, setIsFilled] = useState(true); 

  const handleDeleteClick = () => {
    //console.log('Before deletion - isFilled:', isFilled, 'id:', id);
    if (isFilled) {
      handleRemoveFavorite(id); 
    }
    setIsFilled(!isFilled);
    //console.log('After deletion - isFilled:', isFilled, 'id:', id);
  };

  return (
    <div>
      <img
        src={image}
        alt={name}
        height={260}
        width={260}
        overflow="hidden"
      />
      <h2>{name}</h2>
      <Link to={adoption_link} target="_blank" rel="noopener noreferrer">
        <Button>Adopt</Button>
      </Link>
      <Link to="#" onClick={(e) => { e.preventDefault(); handleDeleteClick(); }}>
        {isFilled ? (
          <FavoriteIcon style={{ color: 'red' }} />
        ) : (
          <FavoriteBorderOutlinedIcon style={{ color: 'red' }} />
        )}
      </Link>
    </div>
  );
};

<<<<<<< HEAD
export default FavoritePetCardItem;
=======
export default FavoritePetCardItem;
>>>>>>> 85d5c5e (added all MVP code)
