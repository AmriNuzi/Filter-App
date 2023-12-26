import { Button } from '@mui/material';
import React, { useState } from 'react';

const CreatePerson =({addPerson})=> {

  const [name, setName]= useState("");
  const [category, setCategory]= useState("");
  const [status, setStatus]= useState("");
  

  const handleSubmit = (e)=>{

     e.preventDefault();
     addPerson({name, category, status});
     setName('');
     setCategory('')
     setStatus('');
    }



  return (
      <form onSubmit={handleSubmit}>
        <div className="fullname">
          <label >
            <h2>Full Name</h2>
              <input  
                type="text" 
                value={name}
                placeholder='Full Name'
                onChange={(e)=>setName(e.target.value)}
                />
          </label>
          <br/>
          <label >
            <h2>Category</h2>
            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="children">Children -18</option>
            </select>
          </label>
          <br/>
          <label>
            <h2>Status</h2>
            <select value={status} onChange={(e)=>setStatus(e.target.value)}>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
            </select>  
          </label> 
          

            <Button 
              type="submit"
            >Save</Button>
        </div>
      </form>
    
  )
}


export default CreatePerson
