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
    <section className='section'>
      <h2 className='section-title'>smoothies</h2>
      <div className='smoothies-center'>
        {smoothies.map(item => {
          return <Smoothie key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default SmoothieList;
