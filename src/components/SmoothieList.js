import React from 'react';
import Smoothie from './Smoothie';
import Loading from './Loading';
import {smoothieList} from '../assets/languages/smoothieAllLang';
import { useGlobalContext } from '../context';

const SmoothieList = () => {

  const {loading, smoothies, englishLang} = useGlobalContext();
  const langOption = englishLang ? smoothieList.en : smoothieList.sr;

  if (loading) {
    return <Loading />
  }

  if (smoothies.length < 1) {
    return <section className='section'>
            <h2 className='section-title'>{langOption.info}</h2>
          </section>
  }

  return (
    <section className='section'>
      <h2 className='section-title colorized colorized--red'>smoothies</h2>
      <div className='smoothies-center'>
        {smoothies.map(item => {
          return <Smoothie key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default SmoothieList;
