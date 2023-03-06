import { useState, useEffect, useContext } from 'react'
import Dashboard from '../Dashboard/Dashboard.js'
import { NavLink } from 'react-router-dom';

import './Status.css'
import { ThemeContext } from '../../Context/ThemeContext.js';



export default function Status() {
  const {numberPage, tot, setTot} = useContext(ThemeContext)

  const changeTot = () => {
    if (tot<120) {
      return (
        <p className="readCoran"> Lecture : ⭐ </p>
      );
    } else if (tot<200) {
      return (
        <p className="readCoran"> Lecture : ⭐⭐ </p>
      );
  } else if (tot<360) {
    return (
      <p className="readCoran"> Lecture : ⭐⭐⭐ </p>
    );
} else if (tot<480) {
  return (
    <p className="readCoran"> Lecture : ⭐⭐⭐ </p>
  );
} else   {
  return (
    <p className="readCoran"> Lecture : ⭐⭐⭐⭐ </p>
  );
  }
}
  return (
    <div className='status m-auto px-4 col-12 col-sm-10 col-lg-6'>
      <h1>Statistique de lecture</h1>
      <div className="human">
        <div className="assidu">
          
           {((tot<120) && <p className="readCoran"> Lecture : ⭐ </p>  )||
            ((tot<240) && <p className="readCoran"> Lecture : ⭐⭐ </p>  )||
            ((tot<360) && <p className="readCoran"> Lecture : ⭐⭐⭐ </p> ) ||
            ((tot<500) && <p className="readCoran"> Lecture : ⭐⭐⭐⭐ </p> ) ||
            ((tot<607) && <p className="readCoran"> Lecture : ⭐⭐⭐⭐⭐ </p> ) } 
          
          {/* <p className="revision">
            Révision : ⭐ ⭐ 
          </p> */}
        </div>
      </div>
      <h2>Commentaire:</h2>
      <div className="commentaire">
      {((tot<120) && <p className="comment"> Qu'Allah te facilite pour ta lecture!! </p>  )||
            ((tot<240) && <p className="comment"> Alhamdoulillah !! Tu as bien avancé !! 😉</p>  )||
            ((tot<360) && <p className="comment"> Ne lache pas !! Car les récompenses seront énorme Incha Allah 🚀</p> ) ||
            ((tot<500) && <p className="comment"> Déja à mi-chemin !! Allah Akbar 🎊🎊 </p> ) ||
            ((tot<607) && <p className="comment"> Soubhanallah, Allah akbar, Alhamdoulillah!!💕💕 </p> ) } 
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
