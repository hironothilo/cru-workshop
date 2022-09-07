import './App.css';
import React, { useState } from 'react';
import  Form  from './component/Form';

function App() {
  const [item, setItem] = useState([]);
  const addItem = (newItem) =>{
    setItem((prevItem) => {
      return [newItem, ...prevItem]
    });
  }
  return (
    <>
      <ul>
        {item.map((item,index) =><li key={index}>{item.title}</li>)}
      </ul>
      <Form addItem={addItem}/>
    </>
  );
}

export default App;