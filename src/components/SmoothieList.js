import React, {useRef, useEffect} from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import Smoothie from './Smoothie';
import Loading from './Loading';
import {smoothieList} from '../assets/languages/smoothieAllLang';
import { useGlobalContext } from '../context';
// koriguje window.behavior: 'smooth' da radi na svim browserima , UKLJUICUJUCI I SAFARI I STARIJE 
smoothscroll.polyfill();

const SmoothieList = () => {

  const {loading, smoothies, page, englishLang} = useGlobalContext();
  const sectionScroll = useRef();
  
  const langOption = englishLang ? smoothieList.en : smoothieList.sr;

  useEffect(() => {
    //const isAndroid = /(android)/i.test(navigator.userAgent);
    const isMobile = window.innerWidth < 800;

    if (!loading && isMobile) {
      window.scrollTo({
        top: 100,
        behavior: 'smooth'
      });

    }
  }, [loading]);

  if (loading) {
    return <Loading />
  }

  if (smoothies.length < 1) {
    return <section className='section'>
            <h2 className='section-title'>{langOption.info}</h2>
          </section>
  }

  return (
    <section className='section' ref={sectionScroll}>
      <h2 className='section-title colorized colorized--red'>smoothies</h2>
      <div className='smoothies-center'>
        {smoothies[page].map(item => {
          return <Smoothie key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default SmoothieList;
