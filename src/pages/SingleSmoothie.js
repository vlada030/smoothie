import React, {useState, useEffect} from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';

// import podesenog firebase objekta
import database from '../firebaseBase';
const databaseRef = database.database().ref('smoothies');

const SingleSmoothie = () => {

  const {id} = useParams();
  const {loader, setLoader} = useState();
  const {smoothie, setSmoothie} = useState(null);

  useEffect(() => {
    databaseRef.orderByChild('id').equalTo(id).once("value", function(snapshot) {
      console.log(snapshot.val());
      snapshot.forEach(function(data) {
          console.log(data.key);
      });
  });
  }, [id]);

  return (
    <section className='section'>
      <h2>{id}</h2>
    </section>
  )
}

export default SingleSmoothie;