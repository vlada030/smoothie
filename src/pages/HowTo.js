import React from 'react';
import {howTo} from '../assets/languages/howToLang';

import {useGlobalContext} from '../context';

// uzeto sa https://fitfoodiefinds.com/100-healthy-smoothie-recipes/    

const HowTo = () => {

  const {englishLang} = useGlobalContext();
  const langOption = englishLang ? howTo.en : howTo.sr;

  return (
    // <section className='section about-section'>
    //   <h1 className='section-title colorized colorized--green'>How to Make a Smoothie</h1>
    //   <p>
    //       If you’re wondering how to make a smoothie, don’t worry, you’re not the only one Googling this! Smoothies are such a great thing to know how to make if you are in college, need a quick breakfast, or have “nothing in your cabinets.” I’m going to walk you through exactly how to make the perfect smoothie every single time.
    //     </p>
    //   <p>
    //       We thought it would be useful to create an equation of sorts so that you can use what you have at home!</p>

    //     <img className='section-img' src='../images/about-1.jpg' alt='img-1' />        
        
    //     <h3 className='section-subtitle'>Step 1: Assemble Ingredients</h3>
    //     <p>Smoothies are all about finding that perfect ratio of fruit to liquid. That’s why you’ll see in our basic smoothie recipe, we have about <strong>1 cup of liquid to 2 cups of frozen fruit.</strong> You’ll also see that we don’t use ice in our smoothies because we find that ice dilutes the flavor and defeats the purpose of using frozen fruit!</p>
        
    //     <p>We say 2:1 with a grain of salt because everyone has their own preference. Some people like to drink smoothies with a straw and others like it thick enough to be eaten with a spoon. So, start with 1 cup of liquid and add more as you wish.</p>
    //     <p>In addition to the 2:1 ratio of fruit to liquid, you can also add other ingredients such as protein powder, greens, Greek yogurt, seeds, etc.</p>

    //     <h3 className='section-subtitle'>Step 2: Blend</h3>
    //     <p>Now it’s time to add all of your ingredients to your blender. Remember that you can always add more liquid, but you can’t take it away! We suggest blending on high until everything is smooth.</p>
    //     <p>If you are using something like kale or spinach, it may take some time for the blender to do it’s just, you just need to be patient. Depending on how frozen your fruit is, you may need to stop your blender and scrape the sides with a spatula and/or add more liquid!</p>

    //     <img className='section-img' src='../images/about-2.jpg' alt='img-2' />   

    //     <h3 className='section-subtitle'>Step 4: Serve</h3>
    //     <p>Once you’ve got your smoothie recipe at the desired consistency, it’s time to serve. You’ve got choices: cup or bowl. Smoothie bowls are all the rage right now, but you can always keep it classic with a cup or glass.</p>

    // </section>
    <section className='section about-section'>
      <h1 className='section-title colorized colorized--green'>{langOption.title}</h1>

      <p>{langOption.par_1}</p>

      <p>{langOption.par_2}</p>

      <img className='section-img' src='../images/about-1.jpg' alt='img-1' />        
        
      <h3 className='section-subtitle'>{langOption.subtitle_1}</h3>
      <p>{langOption.par_3}</p>
        
      <p>{langOption.par_4}</p>

      <p>{langOption.par_5}</p>

      <h3 className='section-subtitle'>{langOption.subtitle_2}</h3>

      <p>{langOption.par_6}</p>

      <p>{langOption.par_7}</p>

      <img className='section-img' src='../images/about-2.jpg' alt='img-2' />   

      <h3 className='section-subtitle'>{langOption.subtitle_3}</h3>
      <p>{langOption.par_8}</p>

    </section>
  )
}

export default HowTo;