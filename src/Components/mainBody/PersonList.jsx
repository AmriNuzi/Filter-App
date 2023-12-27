import React from 'react'

const PersonList = ({persons})=> {
    const reversedPersons= [...persons].reverse();

    return(
    <div>
        <ol>
        {
            reversedPersons.map((person, index)=>(
                <p key={index}>
                 {reversedPersons.length- index+"."}  <b> {person.name}</b> , -Category: {person.category}, Status: {person.status}
                </p>
            ))
        }
        </ol>
    </div>
    )
}

export default PersonList
