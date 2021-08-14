import React,{useState} from 'react';
import data from './data'
import List from './List'
import './App.css';

function App() {
  const [places, setPlaces] = useState(data); 
  return (
    <div className="App">
      <h2>{places.length} places for Holidays 🌄 😎 </h2>
      <List places={places}/>
           <button onClick={()=>{setPlaces([])}}>Clear all</button>
    </div>
  );
}

export default App;
