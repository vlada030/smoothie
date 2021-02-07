import React, {useState, useEffect} from 'react';
import Loading from '../components/Loading';
import { FiHeart } from "react-icons/fi";
import { useParams, Link } from 'react-router-dom';

import { useGlobalContext } from '../context';
import {singleSmoothie} from '../assets/languages/smoothieAllLang';


// import podesenog firebase objekta
import database from '../firebaseConfig';

const SingleSmoothie = () => {
  
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [smoothie, setSmoothie] = useState({ingredients: [], instructions: ''});
  
  
  const {setShowModal, setModalMsg, likedList, toggleLike, englishLang} = useGlobalContext();
  
  const databaseRefChoice = englishLang ? 'smoothies' : 'smoothiesSER';
  const databaseRef = database.database().ref(databaseRefChoice);

  const langOption = englishLang ? singleSmoothie.en : singleSmoothie.sr;

  useEffect(() => {
    // console.log('FETCH SINGLE SMOOTIE');
    setLoading(true);
    databaseRef.orderByChild('id').equalTo(id).once("value").then(snapshot => {
      // mora ovako jer tako firebase uvek vraca neku vrstu array
      snapshot.forEach( data => {
        setSmoothie(data.val()); 
        setLoading(false);
    });
  }).catch(error => {
    setLoading(false);
    setShowModal(true);
    setModalMsg(error.code);
  })
  }, [id, setShowModal, setModalMsg, englishLang]);

  if (loading) {
    return <Loading />
  }

  const {name, imageURL, ingredients,instructions, preparation, nutrition} = smoothie;

  let updatedNutrition = [];
  for (const key in nutrition) {
      updatedNutrition.push(`${key}: ${nutrition[key]}`)
  }

  let helperClass = '';
  if (likedList.map(item => item.id).includes(id)) {
    helperClass = 'btn-like liked';
  } else {
    helperClass='btn-like';
  }
  return (
    <section className='section smoothie-section'>
      <Link to='/' className='btn btn-primary'>
        {langOption.btn_back}
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink-info'>
        <img src={`.${imageURL}`} alt={name} />

        <ul className='drink-list'>

          <li className='drink-item'>
            <span className='drink-name'>{langOption.ingr}</span>
            {ingredients.map((item, index) => {
              return <p key={item}>
                      {item}
                    </p>
            })}
          </li>

          <li className='drink-item'>
            <span className='drink-name'>{langOption.instr}</span>
            {instructions.split('. ').map((item, index) => {
                return <p key={item}>
                  <span className='ordinary-number'>{index + 1 + '.'}</span>
                  {item + '.'}
                </p>
            })}
          </li>

          <li className='drink-item'>
            <span className='drink-name'>{langOption.prep}</span>
            {preparation}
          </li>

          <li className='drink-item'>
            <span className='drink-name'>{langOption.nutr}</span>
            <div className='grid-container'>
              {updatedNutrition.map((item, index) => {
                return <p key={index}>
                          { item.includes('Calories') || item.includes('N/A') || item.includes('Serving Size') || item.includes('Kalorije')? item  : item + 'gr'}
                        </p>
              })}
            </div>
          </li>

          <li>
            <div className='grid-container mt-3'>
              <p className='likes-text'>{langOption.fav_title}</p>
              <button className={helperClass} onClick={() => toggleLike(smoothie)}>
                <FiHeart className='nav-favorites-icon'/> 
              </button>
            </div>

          </li>

        </ul>

      </div>
    </section>
  )
}

export default SingleSmoothie;