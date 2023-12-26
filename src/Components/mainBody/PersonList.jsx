// import { Button } from '@mui/material';
import React from 'react'
// import CreatePerson from './CreatePerson';

const PersonList = ({persons})=> {


    <div>
        <ol>
        {
            persons.map((person, index)=>(
                <li key={index}>
                   <b> {person.name}</b> , -Category: {person.category}, Status: {person.status}
                </li>
            ))
        }
        </ol>
    </div>
  
}

export default PersonList
