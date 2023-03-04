import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import imgBurger from '../../../assets/menu.png'
import zikrLogo from '../../../assets/quranlogo1.png'

import {Link, NavLink} from 'react-router-dom';

export default function Sidebar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleLien, setToggleLien] = useState(true);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  const toggleDirection = () => {
    setToggleLien(!toggleLien)
  }
 
  useEffect(() => {
    const changeWidth = () => {
    setLargeur(window.innerWidth);
  }
  window.addEventListener('resize', changeWidth);

  return () => {
    window.removeEventListener('resize',changeWidth);
  }

  }, [])

  return (
    <nav className='sidenav'>
      <img className='zikr' src={zikrLogo} alt="" />
      {(toggleMenu || largeur > 500) && (
      <ul className='menuList'>
      <li className='items'><NavLink to="/"
      className={({isActive}) => isActive ? "" : ""} onClick={toggleNav}
      >Présentation</NavLink></li>
      <li className='items'><NavLink to="/recap"
       className={({isActive}) => isActive ? "activeLink" : ""} onClick={toggleNav}
      >Récapitulatif</NavLink></li>
      <li className='items' ><NavLink to="/status"
       className={({isActive}) => isActive ? "activeLink" : ""} onClick={toggleNav}
      >Status</NavLink></li>
      </ul>
      )}
      <button onClick={toggleNav}><img className='burger' src={imgBurger} alt="" /></button>
    </nav>
  )
}
