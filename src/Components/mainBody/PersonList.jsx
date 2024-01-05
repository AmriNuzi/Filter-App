import React from 'react'
import "./personList.scss";

const PersonList = ({persons})=> {
    const reversedPersons= [...persons].reverse();

    return(
    <div className='personList'>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody> 
        {
            reversedPersons.map((person, index)=>(
                <tr key={index}>
                    <td>{reversedPersons.length- index+". "}
                    <b> {person.name}</b> </td>
                    <td>{person.category}</td>  
                    <td>{person.status}</td>
                </tr>
                ))
            }
            </tbody>
        </table>
    </div>
    )
}

export default PersonList
