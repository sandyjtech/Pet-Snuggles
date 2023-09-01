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
import { useUserAuth } from '../../context/UserAuthProvider';

const EmptyHeart = ({ petId, userId }) => {
  const [isFilled, setIsFilled] = useState(false);
  const { favoritePets, setFavorite, handleAddFavorite } = useFavorites(); // Use setFavorite from context

  
  const handleClick = () => {
    handleAddFavorite(userId, petId)
    setFavorite(favoritePets); // Update favoritePets in the context
    setIsFilled(!isFilled);
   
  };

  return (
      <a href onClick={handleClick}>
        {isFilled ? <FavoriteIcon style={{ color: 'red' }}/> : <FavoriteBorderOutlinedIcon style={{ color: 'red' }}/>}
      </a>
  );
}
//turn into a button, add to user id, sent to database favorites, userid, petid

const PetCardItem = ({ name, image, id }) => {
  const { user } = useUserAuth();  

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
      {user && (
          <CardActions>
            <EmptyHeart petId={id} userId={user.id} />
             <NavLink to={`/pets/${id}`} style={{ marginLeft: 'auto' }}><Button variant="outlined">Book</Button></NavLink>
          </CardActions>
        )}
      </Card>
    </div>
  )
}
//need to add route to button

export default PetCardItem
<<<<<<< HEAD


=======
>>>>>>> 85d5c5e (added all MVP code)


