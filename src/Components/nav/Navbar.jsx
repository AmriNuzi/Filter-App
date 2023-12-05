import React from 'react'
import "./navbar.scss";


function Navbar() {
  return (
    <div>
      <div className='header'>
        <div className='box' 
          style={{
          backgroundColor:'#ECDE7C'
        }} >
          Men
        </div>
        <div className='box'
          style={{
          backgroundColor:'#7AC14D'
        }}>
          Women 
        </div>
        <div className='box'
          style={{
          backgroundColor:'#FE4C4A'
        }}>
            Children
        </div>
      </div>
    </div>
  )
}

export default Navbar
