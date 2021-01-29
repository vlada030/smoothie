import React, {useState, useEffect} from 'react';
import Loading from '../components/Loading';
import { FiHeart } from "react-icons/fi";
import { useParams, Link } from 'react-router-dom';

import { useGlobalContext } from '../context';


// import podesenog firebase objekta
import database from '../firebaseConfig';
const databaseRef = database.database().ref('smoothies');

const SingleSmoothie = () => {

  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [smoothie, setSmoothie] = useState({ingredients: [], instructions: ''});

  const {setShowModal, setModalMsg, likedList, toggleLike} = useGlobalContext();

  useEffect(() => {
    console.log('FETCH SINGLE SMOOTIE');
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
  }, [id, setShowModal, setModalMsg]);

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
        bach home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink-info'>
        <img src={`.${imageURL}`} alt={name} />

        <ul className='drink-list'>

          <li className='drink-item'>
            <span className='drink-name'>ingredients :</span>
            {ingredients.map((item, index) => {
              return <p key={item}>
                      {item}
                    </p>
            })}
          </li>

          <li className='drink-item'>
            <span className='drink-name'>instructions :</span>
            {instructions.split('. ').map((item, index) => {
                return <p key={item}>
                  <span className='ordinary-number'>{index + 1 + '.'}</span>
                  {item + '.'}
                </p>
            })}
          </li>

          <li className='drink-item'>
            <span className='drink-name'>preparation :</span>
            {preparation}
          </li>

          <li className='drink-item'>
            <span className='drink-name'>nutrition :</span>
            <div className='grid-container'>
              {updatedNutrition.map((item, index) => {
                return <p key={index}>
                          { item.includes('Calories') || item.includes('N/A') || item.includes('Serving Size') ? item  : item + 'gr'}
                        </p>
              })}
            </div>
          </li>

          <li>
            <div className='grid-container'>
              <p>Add it to my favorites!</p>
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