import React, { useState } from 'react'
import "./navbar.scss";


function Navbar() {
  const [menCount, setMenCount]= useState(0);
  const [womenCount, setWomenCount]= useState(0);
  const [childrenCount, setChildrenCount]= useState(0);

  const updateCounts = (category)=>{
    
    switch(category){
      case 'men':
        setMenCount((prevCount)=>prevCount + 1);
        break;
        case 'women':
        setWomenCount((prevCount)=>prevCount + 1);
        break;
        case 'children':
        setChildrenCount((prevCount)=>prevCount + 1);
        break;
        default:
        break;
    }
  }

  return (
    <div>
      <div className='header'>
        <div className='box' 
          style={{
          backgroundColor:'#ECDE7C'
        }} >
          <span>Men: {menCount}</span>
        </div>
        <div className='box'
          style={{
          backgroundColor:'#7AC14D'
        }}>
          <span>Women: {womenCount}</span> 
        </div>
        <div className='box'
          style={{
          backgroundColor:'#FE4C4A'
        }}>
            <span>Children: {childrenCount} </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
