import React from 'react';
import './App.css';
import Name from "./profile/FullName";
import Profile from "./profile/ProfilPhoto";
import Adresse from "./profile/Address";

function App() {
  return (
    <div className="App">
        <Name />
        <Profile />
        <Adresse />
    </div>
  );
}

export default App;
