import React from 'react';
import Smoothie from './Smoothie';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const SmoothieList = () => {

  const {loading, smoothies} = useGlobalContext();

  if (loading) {
    return <Loading />
  }

  if (smoothies.length < 1) {
    return <h2 className='section-title'>
              No Smoothies Matched Your Search Criteria
            </h2>
  }

  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  )
}

export default SmoothieList;
