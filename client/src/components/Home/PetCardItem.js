import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

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
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 345}}
          image={image}
          alt={name}
        />
      <CardContent>
        <h2>{name}</h2>
      </CardContent>
      <CardActions>
        <EmptyHeart align='right'/>
        <NavLink to="/pet-profile"><Button>Book</Button></NavLink>
      </CardActions>
      </Card>
    </div>
  )
}
//need to add route to button

export default PetCardItem
