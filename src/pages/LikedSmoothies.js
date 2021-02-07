import React from 'react';
import Smoothie from '../components/Smoothie';
import Loading from '../components/Loading';
import {likedSmoothies} from '../assets/languages/smoothieAllLang';

import { useGlobalContext } from '../context';

const LikedSmoothies = () => {

    const {loading, likedList, englishLang} = useGlobalContext();
    const langOption = englishLang ? likedSmoothies.en : likedSmoothies.sr;

    if (loading) {
        return <Loading />
      }
    
      if (likedList.length < 1) {
        return <section className='section'>
                <h2 className='section-title section-title colorized colorized--red'>
                    {langOption.info}
                  </h2>
              </section>
      }

    return <section className='section'>
                <h2 className='section-title colorized colorized--red'>{langOption.title}</h2>
                <div className='smoothies-center'>
                {likedList.map(item => {
                    return <Smoothie key={item.id} {...item}/>
                    })}
                </div>
            </section>
}

export default LikedSmoothies;