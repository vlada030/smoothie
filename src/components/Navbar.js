import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdFavorite, MdSwapVert, MdArrowUpward } from "react-icons/md";
import logo from '../logo.svg';

import { links } from '../links';

const Navbar = () => {
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

        <div className='nav-favorites'>
          <MdFavorite className='nav-favorites-icon'/>
          <div className='favorites-container'>
            <p className='favorites-number'>33</p>
          </div>
        </div>

        <div className='nav-toggle'>
          <MdSwapVert className='nav-toggle-icon'/>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;
