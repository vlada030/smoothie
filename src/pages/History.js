import React from 'react';
import {useGlobalContext} from '../context';
import {history} from '../assets/languages/historyLang';

const History = () => {

    const {englishLang} = useGlobalContext();
    const langOption = englishLang ? history.en : history.sr;   

    return <section className='section about-section'>
                <h1 className='section-title colorized colorized--green'>
                    {langOption.title}
                </h1>

                <p>{langOption.par_1}</p>

                <img className='section-img' src='../images/history-2.png' alt='img-2' />
                 
                <p>{langOption.par_2}</p>

                <img className='section-img' src='../images/history-1.jpg' alt='img-1' />        

                <p>{langOption.par_3}</p>
                <p>{langOption.par_4}</p>
            </section>
}

export default History;