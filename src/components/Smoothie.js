import React from 'react';
import { Link } from 'react-router-dom';
import {smoothie} from '../assets/languages/smoothieAllLang';
import {useGlobalContext} from '../context';

const Smoothie = (props) => {
  const {englishLang} = useGlobalContext();
  const langOption = englishLang ? smoothie.en : smoothie.sr;
  const {id, name, imageURL, hashtag, preparation} = props;

  return (
    <article className='smoothie'>
      <div className='img-container'>
        <img src={imageURL} alt={name} />
      </div>
      <div className='smoothie-footer'>
        <h3>{name}</h3>
        <h4>{`${hashtag.join(', ')}`}</h4>
        <p>{`${langOption.time}: ${preparation}`}</p>
        <Link to={`/smoothie/${id}`} className='btn btn-primary btn-details'>
          {langOption.btn_text}
        </Link>
      </div>
    </article>
  )
}

export default Smoothie;
