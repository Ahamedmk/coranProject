import React from 'react'
import imgMk from '../../assets/quranlogo.png';
import './Loader.css'

export default function Loader() {
  return (
    <div className="img ">
      <img src = {imgMk} alt="" className='imgMk' />
      </div>
  )
}
