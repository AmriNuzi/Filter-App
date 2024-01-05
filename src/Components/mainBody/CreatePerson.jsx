// import { Button } from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../nav/Navbar';
import "./createPerson.scss";

const CreatePerson =({addPerson})=> {

  const [name, setName]= useState("");
  const [category, setCategory]= useState("");
  const [status, setStatus]= useState("");
  

  const handleSubmit = (e)=>{

     e.preventDefault();
     addPerson({name, category, status});

    Navbar.updateCounts(category);

     setName('');
     setCategory('')
     setStatus('');
    }



  return (
      <form onSubmit={handleSubmit}>
        <div className="fullname">
        <div className="name">
            <h2>Full Name</h2>
              <input  
                type="text" 
                value={name}
                placeholder='Full Name'
                onChange={(e)=>setName(e.target.value)}
                />
          </div>
          <br/>
          <div className='category-status'>
            <div className="category">
              <h2>Category</h2>
              <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="/">Choose one</option>
                <option value="men" style={{backgroundColor:"rgb(236, 222, 124)"}}>Men</option>
                <option value="women" style={{backgroundColor:"rgb(122, 193, 77"}}>Women</option>
                <option value="children" style={{backgroundColor:"rgb(254, 76, 74)"}}>Children -18</option>
              </select>
          </div>
          <br/>
          <div className="status">
            <h2>Status</h2>
            <select value={status} onChange={(e)=>setStatus(e.target.value)}>
              <option value="/">Choose one</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
            </select>  
          </div> 
        </div>

            <button 
              type="submit"
            >Save</button>
        </div>
      </form>
    
  )
}


export default CreatePerson
