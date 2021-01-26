import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = (props) => {

  const {id, name, imageURL, hashtag, preparation} = props;

  return (
    <article className='smoothie'>
      <div className='img-container'>
        <img src={imageURL} alt={name} />
      </div>
      <div className='smoothie-footer'>
        <h3>{name}</h3>
        <h4>{`${hashtag.join(', ')}`}</h4>
        <p>{`Time to prepare: ${preparation}`}</p>
      </div>
    </article>
  )
}

export default Cocktail
