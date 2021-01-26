import React from 'react';
import blender from '../assets/blender.svg';

const Loading = () => {
 return (
  <div className="loader">
      <img src={blender} alt='loader'/>
  </div>
 )
}

export default Loading;