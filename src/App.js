import './App.css';
import CreatePerson from './Components/mainBody/CreatePerson';
import PersonList from './Components/mainBody/PersonList';
import Navbar from './Components/nav/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <CreatePerson/> */}
      <PersonList/>
    </div>
  );
}

export default App;
