import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const RatingStars = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className='app__rating-stars'>
        {
            [...Array(5)].map((star, i) => {
              const ratingValue = i + 1;

              return (
                <label key={ i }>
                  <input 
                    type="radio" 
                    name="rating" 
                    value={ ratingValue } 
                    onClick={ () => setRating(ratingValue) }
                  />
                  <FaStar 
                    size={ 28 } 
                    className='star' 
                    onMouseEnter={ () => setHover(ratingValue) }
                    onMouseLeave={ () => setHover(null) }
                    color={ ratingValue <= (hover || rating) ? 'orangered' : '' }
                  />
                </label>
              )
            })
        }
    </div>
  );
}

export default RatingStars;