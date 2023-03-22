import { useState, useEffect, useContext } from 'react'
import Dashboard from '../Dashboard/Dashboard.js'
import { NavLink } from 'react-router-dom';
import UploadAvatar from './UploadAvatar.js';
import './Status.css'
import { ThemeContext } from '../../Context/ThemeContext.js';
import Confetti from './Confetti.js';



export default function Status() {
  const {numberPage, tot, setTot} = useContext(ThemeContext)

  return (
    <div className='status m-auto px-4 col-12 col-sm-10 col-lg-6'>
      {(tot>=604) && <Confetti />}
      <h1>Statistique de lecture</h1>
      <div className="human">
        <div className="assidu">
          
           {((tot<120) && <p className="readCoran"> Lecture : ⭐ </p>  ) ||
            ((tot<240) && <p className="readCoran"> Lecture : ⭐⭐ </p>  ) ||
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
      {/* <UploadAvatar /> */}
      {/* <Confetti /> */}
     <Dashboard />
      <div className="suivThird">
          <button className='preThird'>
          <NavLink to="/recap">Précédent </NavLink>
          </button>
        </div>
      
    </div>
    
  )
}
