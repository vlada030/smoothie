import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiHeart, FiGrid } from "react-icons/fi";

import logo from '../assets/logo.png';

import { links } from '../assets/links';
import {useGlobalContext} from '../context';

const Navbar = () => {

  const {openSidebar, likedList, englishLang, toggleLanguage} = useGlobalContext();
  
  const languageIcon = englishLang ? './images/sr.png' : './images/en.png';

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='logo' className="logo"/> 
        </Link>

        <ul className='nav-links'>
          {links.map(link => {
            const {id, path, title} = link;
            return <li key={id}>
                    <NavLink to={path} className='nav-link' exact>
                      {title}
                    </NavLink>
                  </li>
          })}
        </ul>

        <NavLink to='/smoothies' className='nav-favorites'>

          <FiHeart className='nav-favorites-icon'/>
          <p className='nav-favorites-number'>{likedList.length}</p>

        </NavLink>

        <button className='nav-toggle' onClick={openSidebar}>
          <FiGrid className='nav-toggle-icon'/>
        </button>

        <button className='nav-lang-button' onClick={toggleLanguage}>
          <img  src={languageIcon} alt='lang'/>
        </button>

      </div>
    </nav>
  )
}

export default Navbar;
