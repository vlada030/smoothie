import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiHeart, FiGrid } from "react-icons/fi";

import logo from '../logo.png';

import { links } from '../links';
import {useGlobalContext} from '../context';

const Navbar = () => {

  const {openSidebar} = useGlobalContext();

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

        <NavLink to='/TEST' className='nav-favorites'>

          <FiHeart className='nav-favorites-icon'/>
          <p className='nav-favorites-number'>33</p>

        </NavLink>

        <button className='nav-toggle' onClick={openSidebar}>
          <FiGrid className='nav-toggle-icon'/>
        </button>

      </div>
    </nav>
  )
}

export default Navbar;
