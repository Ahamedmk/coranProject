import React, {useContext} from 'react'
import { UserContext } from '../../Context/userContext'
import zikrLogo from '../../assets/quranlogo1.png'
import './Home.css'

export default function Home() {

  const {toggleModals} =useContext(UserContext)
  return (
    <div className='home'>
      <div className="presentation">
     <h1 className="salam">Salam Aleykoum,</h1>  
     <div className="introduction">
     Bienvenue à  Quran Read 
      votre suivie quotidien de la lecture du Coran.
      <img className="logo" src={zikrLogo} alt="" />
      <div className="inscription">
      <button
      onClick={() => toggleModals("signUp")}
       className="souscription">Inscription</button>
      <button
      onClick={() => toggleModals("signIn")}
      className="souscription">Deconnection</button>
      </div>
      </div>
     </div>
    </div>
  )
}
