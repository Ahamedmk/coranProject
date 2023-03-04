import { useState, useEffect, useContext } from 'react'
import Dashboard from '../Dashboard/Dashboard.js'
import { NavLink } from 'react-router-dom';

import './Status.css'

export default function Status() {


  return (
    <div className='status m-auto px-4 col-12 col-sm-10 col-lg-6'>
      <h1>Statistique de lecture</h1>
      <div className="human">
        <div className="assidu">
          <p className="readCoran">
            Lecture : ⭐ ⭐ ⭐ ⭐
          </p>
          {/* <p className="revision">
            Révision : ⭐ ⭐ 
          </p> */}
        </div>
      </div>
      <h2>Commentaire</h2>
      <div className="commentaire">
        
      </div>
     <Dashboard />
      <div className="suivThird">
          <button className='preThird'>
          <NavLink to="/recap">Précédent </NavLink>
          </button>
        </div>
      
    </div>
    
  )
}
