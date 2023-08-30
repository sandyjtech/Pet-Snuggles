import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const EmptyHeart = () => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <button onClick={handleClick} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
      {isFilled ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderOutlinedIcon style={{ color: 'red' }} />}
    </button>
  );
};

const PetCardItem = ({ name, image }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 345 }} image={image} alt={name} />
        <CardContent>
          <h2>{name}</h2>
        </CardContent>
        <CardActions>
          <EmptyHeart />
          <NavLink to="/pet-profile">
            <Button>Book</Button>
          </NavLink>
        </CardActions>
      </Card>
    </div>
  );
};

export default PetCardItem;

