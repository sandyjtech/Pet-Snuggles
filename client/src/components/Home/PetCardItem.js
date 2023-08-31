import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesProvider';

const EmptyHeart = () => {
  const [isFilled, setIsFilled] = useState(false);
  const {favorite, setFavorite} = useFavorites();

  const handleClick = () => {
    console.log('handleClick')
    setIsFilled(!isFilled);
    setFavorite(favorite)
  };

  return (
    <button onClick={handleClick} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
      {isFilled ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderOutlinedIcon style={{ color: 'red' }} />}
    </button>
  );
};

const PetCardItem = ({ name, image, id}) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 345}}
          image={image}
          alt={name}
          overflow hidden
        />
      <CardContent>
        <h2>{name}</h2>
      </CardContent>
      <CardActions>
        <EmptyHeart align='right'/>
        <NavLink to={`/pets/${id}`} style={{ marginLeft: 'auto' }}><Button variant="outlined">Book</Button></NavLink>
      </CardActions>
      </Card>
    </div>
  );
};


export default PetCardItem;


