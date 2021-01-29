import React from 'react';
import {NavLink} from 'react-router-dom';
import { MdKeyboardBackspace } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import {links} from '../assets/links';

import {useGlobalContext} from '../context';

const Sidebar = () => {

    const {showSidebar, closeSidebar, likedList} = useGlobalContext();

    return <aside className={showSidebar ? 'sidebar-wrapper show' : 'sidebar-wrapper'} onClick={closeSidebar}>
                <div className="sidebar">
                    <div className="sidebar-header">
                        <h4>Smoothies</h4>
                        <button onClick={closeSidebar}>
                            <MdKeyboardBackspace className="icon"/>
                        </button>
                    </div>

                    <hr></hr>

                    <ul className='sidebar-links'>
                        {links.map(link => {
                            const {id, path, title} = link;
                            return <li key={id}>
                                <NavLink to={path} className='sidebar-link' exact>
                                    {title}
                                </NavLink>
                            </li>
                        } 
                        )}
                    </ul>

                    <NavLink to='/smoothies' className='sidebar-favorites-container'>
                        <FiHeart className='sidebar-favorites-icon'/>
                        <p className='sidebar-favorites-number'>
                            {likedList.length}
                        </p>
                        </NavLink>

                </div>
            </aside>
}

export default Sidebar;