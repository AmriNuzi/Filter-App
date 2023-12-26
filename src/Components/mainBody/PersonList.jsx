import React from 'react'

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
