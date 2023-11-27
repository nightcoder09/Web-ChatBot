/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './App.css';
import Chatbot from './Chatbot';
import imageSrc from './pic.png'; // Import the image source

const App = () => {
  return (
    <div className="app">
      <img src={imageSrc} alt="Your Image" className="fullimage" />
      <Chatbot />
    </div>
  );
};

export default App;
