import React from 'react'
import { Link } from 'react-router-dom'

const Smoothie = (props) => {

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
        <Link to={`/smoothie/${id}`} className='btn btn-primary btn-details'>
          Read more
        </Link>
      </div>
    </article>
  )
}

export default Smoothie;
