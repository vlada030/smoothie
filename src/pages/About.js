import React from 'react';
import { useGlobalContext } from '../context';
import {about} from '../assets/languages/aboutLang';

const About = () => {

  const {englishLang} = useGlobalContext();
  const langOption = englishLang ? about.en : about.sr;

  return (
    <section className='section about-section'>
      <h1 className='section-title colorized colorized--green'>{langOption.title}</h1>
      <p>{langOption.par_1}</p>
      <p>{langOption.par_2}</p>
      <img className='section-img' src='../images/about-3.jpg' alt='img-3' />
    </section>
  )
}

export default About
