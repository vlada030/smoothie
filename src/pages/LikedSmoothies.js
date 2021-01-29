import React from 'react';
import Smoothie from '../components/Smoothie';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context';

const LikedSmoothies = () => {

    const {loading, likedList} = useGlobalContext();

    if (loading) {
        return <Loading />
      }
    
      if (likedList.length < 1) {
        return <section className='section'>
                <h2 className='section-title section-title colorized colorized--red'>
                    your liked list is empty
                  </h2>
              </section>
      }

    return <section className='section'>
                <h2 className='section-title colorized colorized--red'>My favorites</h2>
                <div className='smoothies-center'>
                {likedList.map(item => {
                    return <Smoothie key={item.id} {...item}/>
                    })}
                </div>
            </section>
}

export default LikedSmoothies;