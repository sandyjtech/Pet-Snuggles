import React, { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const EmptyHeart= () => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };
  return (
      <a onClick={handleClick}>
        {isFilled ? <AiFillHeart color="red"/> : <AiOutlineHeart color="red"/>}
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
