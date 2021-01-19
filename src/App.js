import React from 'react';
import './App.css';
import image from './Components/images/photo.jpg';

function App() {
  return (
    <div className="App">
      <h1 className="title">Roberto Reyes</h1>
      <img src= {image}></img>
      <h1>favourite color black</h1>
      <h1>I like rainy days</h1>
      <h1>I like to see the snow fall but I don't like to walk on it</h1>
      <h1>I was born in the Dominican Republic in the city of Santiago, but I moved to the city of New York when I was 11 years old, I am currently 15</h1>
      <h1>I was born in 2004 December 19</h1>
    </div>
  );
}

export default App;
