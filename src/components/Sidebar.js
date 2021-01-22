import React from 'react';
import {NavLink} from 'react-router-dom';
import { MdFavorite, MdArrowUpward } from "react-icons/md";
import {links} from '../links';

const Sidebar = () => {
    return <aside className='sidebar-wrapper show'>
                <div className="sidebar-center">
                    <div className="sidebar-header">
                        <h4>Smoothies</h4>
                        <button>
                            <MdArrowUpward className="icon"/>
                        </button>
                    </div>

                    <hr></hr>

                    <ul className='sidebar-links'>
                        {links.map(link => {
                            const {id, path, title} = link;
                            return <li key={id}>
                                <NavLink to={path} className='sidebar-link'>
                                    {title}
                                </NavLink>
                            </li>
                        } 
                        )}
                    </ul>

                </div>
            </aside>
}

export default Sidebar;