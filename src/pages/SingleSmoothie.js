import React, {useState, useEffect} from 'react';
import Loading from '../components/Loading';
import Modal from '../components/Modal';
import { useParams, Link } from 'react-router-dom';

import { useGlobalContext } from '../context';


// import podesenog firebase objekta
import database from '../firebaseConfig';
const databaseRef = database.database().ref('smoothies');

const SingleSmoothie = () => {

  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [smoothie, setSmoothie] = useState(null);

  const {setShowModal, setModalMsg} = useGlobalContext();

  useEffect(() => {
    setLoading(true);
    // databaseRef.orderByChild('id').equalTo(id).once("value", (snapshot) => {
    //   snapshot.forEach(data => {
    //     setSmoothie(data.val());
    //     setLoading(false);
    // });
    // });
    databaseRef.orderByChild('id').equalTo(id).once("value").then(snapshot => {
      snapshot.forEach( data => {
        console.log(data.val());
        setSmoothie(data.val()); 
        setLoading(false);
    });
  }).catch(error => {
    setLoading(false);
    setShowModal(true);
    setModalMsg(error.code);
  })
  
  }, [id]);

  if (loading) {
    return <Loading />
  }

  console.log(smoothie);
  return (
    <section className='section'>
      <h2>{id}</h2>
    </section>
  )
}

export default SingleSmoothie;