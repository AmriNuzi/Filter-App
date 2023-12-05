import { Button } from '@mui/material';
import React, { useState } from 'react'
import CreatePerson from './CreatePerson';

function PersonList() {

    const [createPerson, setCreatePerson]= useState(false);
    
    const handleCreatePerson = () =>{
        setCreatePerson(true)
    }

  return (
    <div>
        <div className="container">
            {
                createPerson ? <CreatePerson/>
                :(
                    <Button 
                        onClick={handleCreatePerson}
                        
                        > Create</Button>
                )
            }
        </div>
    </div>
  )
}

export default PersonList
