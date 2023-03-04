import React, {useContext, useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ThemeContext } from '../../Context/ThemeContext';
import {Link, NavLink} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

import './Recap.css'



export default function Recap() {
  const {numberPage, tot, setTot} = useContext(ThemeContext)

  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(numberPage));
  // }, [numberPage]);
  
  const total = numberPage.reduce((a,b) => a + b,0);
  setTot(total)
  
  const percentage = Math.trunc ((total* 100)/604);
  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      
      <h1>J'ai lu en tout :  {total} pages </h1>
      
<div className="progression">

  <p>Vous avez atteint : </p>
<CircularProgressbar
 value={percentage} text={`${percentage}%`} 

 styles={buildStyles({
  textColor: "red",
  pathColor: "turquoise",
  trailColor: "gold"
})}
 />
</div>
<div className="recap">
  <h2>Progression</h2>
  <p>il ne reste plus que: &nbsp;<strong>{604 - total }</strong>&nbsp;pages </p>
</div>
<div className="hadithToday">
  <h3>Les mérites de la lecture du coran  :</h3>
  <br />
  <p>
  « Le Messager de Dieu (‘alayhi salat wa salam) a dit : « Celui qui récite une lettre du Livre de Dieu aura une bonne action qui sera décuplée. Je ne dis pas que « Alif, Lam, Mim », est une lettre mais « Alif », est une lettre, « Lam » est une lettre et « Mim » est une lettre. »
  </p>
</div>
<div className="suivSecond">
<button className='preSecond'>
          <NavLink to="/">Précédent </NavLink>
          </button>
          <button className='svtSecond'>
          <NavLink to="/status">Suivant </NavLink>
          </button>
        </div>

   
    </div>
  )
}
