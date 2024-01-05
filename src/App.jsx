import React, {useState} from 'react';
import './App.css';
import CreatePerson from './Components/mainBody/CreatePerson';
import PersonList from './Components/mainBody/PersonList';
import Navbar from './Components/nav/Navbar';
import { Button } from '@mui/material';



function App() {
  const [showForm, setShowForm]= useState(false);
  const [persons, setPersons] = useState([])  

  const createPerson = (person) =>{
    setPersons([...persons, person]);
    setShowForm(false);
}
  const toggleForm=()=>{
    setShowForm(!showForm)
  }

  return (
    <div className="App">
      <Navbar 
      // menCount={menCount} womenCount={womenCount} childrenCount={childrenCount}
      />

      <div className="container">
            <Button onClick={toggleForm}>Add Person</Button>
            {showForm && <CreatePerson addPerson={createPerson}/>}
            <PersonList persons={persons}/>
        </div>
    </div>
  );
}

export default App;
