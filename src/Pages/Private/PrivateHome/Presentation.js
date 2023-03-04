import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { db } from "../../../firebase-config";
import { addDoc, collection, getDocs } from "@firebase/firestore"
import { firestore } from "../../../firebase-config";
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../../Context/ThemeContext';
import Calendary from '../../../presentation/Calendar/Calendary';
// import {v4 as uuidv4} from 'uuid';
import './Presentation.css'



export default function Presentation() {
  const {theme, numberPage, changePage, setNumberPage} = useContext(ThemeContext)
  console.log(numberPage )

    const [users, setUsers] = useState([]);
    const [tester, setTester] = useState([]);
    const [surah, setSurah] = useState([]);
    const [diag, setDiag] = useState(0);

    const laDate = new Date()
    const dateDay = laDate.getDate()
    const leMois = laDate.getMonth()
    const annee = laDate.getFullYear()

    //------------------- Api pour les noms de verset -----------------------------
   const getApiData = async () => {
     const response = await fetch(
       "http://api.alquran.cloud/v1/surah"
     ).then((response) => response.json());

     setUsers(response.data);
    
   };
   

  useEffect(() => {
    getApiData();
  }, []);


  //------------------- les versets au début de chaque pages-----------------------------
  //  projet
   //const total = () => {numberPage.reduce((a,b) => a + b,0);} 
   const total = numberPage.reduce((a,b) => a + b,0);
  
  console.log(numberPage)
  const getApiDoto = async () => {
     const response = await fetch(
       "http://api.alquran.cloud/v1/meta"
     ).then((response) => response.json());
     const result = response.data;
      const page = result.pages;
      const pages = page.references;
  
     const surah = result.surahs;
     const surahs = surah.references;
      console.log(result)
     setTester(pages);
    setSurah(surahs);  
     
   };
 
  

   
  
   useEffect(() => {
    getApiDoto();
 },[]);
 const versetAyahs = tester[total];

 console.log(versetAyahs);
  const versetAya = {...versetAyahs};
 console.log(versetAya.surah);
 console.log(versetAya.ayah);



 const sourates = surah[(versetAya.surah) - 1];
 console.log(sourates);
 const souratesFirst = {...sourates};
 console.log(souratesFirst.englishName);


 const verset = () => {
  const surahp =  versetAyahs;
  const tabSurah = (surahp);
   console.log(tabSurah);
 }
verset()

  const changeValue = (e) => {
     setDiag(Number(e)); 
  }
console.log(diag)




// enregistrer dans firestore
  const envoi = e => {
    e.preventDefault();
    setNumberPage([...numberPage, diag])
   const ref = collection(firestore, "test_data")

   let data = {
    tesData: numberPage
   }
   try {
    addDoc(ref, data)
   } catch(err) {
    console.log(err)
   }
    console.log (numberPage);
  }

// lire dans le firestore
 const getfire = async () => {
 const querySnapshot = await getDocs(collection(db, "test_data"));
 querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
   console.log(doc.id, " => ", doc.data());
   
})
};
 getfire()
console.log(getfire)
  const corriger = e => {
    e.preventDefault();
    const item = numberPage
    item.pop()
    // console.log(item)
    localStorage.setItem('items', JSON.stringify(numberPage))
    console.log(numberPage)
  }
 
 
  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

       < Calendary /> 
      
        <div className="objectif">
      
          <p className='objectif'>
          <span><strong style={{color:'crimson'}}>Objectif:</strong> </span> 
            Lire le Coran tous les jours, minimum 20 pages afin de le terminer chaque mois.
             
          </p>
        
        </div>
        <form className='mb-3' >
        Choisissez le nombre de page lu aujourd'hui :
          <select onChange={e => changeValue(e.target.value)} id="page" >
           <option value = "0">0</option> 
            <option value = "1" >1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">4</option>
            <option value = "5">5</option>
            <option value = "6" >6</option>
            <option value = "7">7</option>
            <option value = "8">8</option>
            <option value = "9">9</option>
            <option value = "10">10</option>
            <option value = "11" >11</option>
            <option value = "12">12</option>
            <option value = "13">13</option>
            <option value = "14">14</option>
            <option value = "15">15</option>
            <option value = "16" >16</option>
            <option value = "17">17</option>
            <option value = "18">18</option>
            <option value = "19">19</option>
            <option value = "20">20</option>
            <option value = "21" >21</option>
            <option value = "22">22</option>
            <option value = "23">33</option>
            <option value = "24">24</option>
            <option value = "25">25</option>
            <option value = "26" >26</option>
            <option value = "27">27</option>
            <option value = "28">28</option>
            <option value = "29">29</option>
            <option value = "30">30</option>
          </select>
          
          <div className="sourate">
           <div className="firstSourate">
           <div className='session'>
             Ma prochaine page sera la page : <strong>{total+ 1}</strong>  
            <br />
            de la sourate : <strong>{souratesFirst.englishName}</strong>
          <br />
          A partir du verset : <strong>{versetAya.ayah}</strong>
          
           </div>
            </div>
          </div>
           <div className="button d-flex  justify-content-center" > 
           <button className='ms-3 btn btn-success' onClick={e => corriger(e)}>
            corriger
          </button>
          <button className='ms-3 btn btn-success' onClick={e => envoi(e)}>
            valider
          </button>
          </div>
          
        </form>
        <div className="suivFirst">
          <button className='svtFirst'>
          <NavLink to="/recap">Suivant </NavLink>
          </button>
        </div>  
       
    </div>
  )
}
