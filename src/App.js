import React, { Component } from 'react';
import PetCollection from './components/PetCollection';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header><h1>Ampers Pets</h1></header>
        <PetCollection />
      </div>
    );
  }




}

export default App;
