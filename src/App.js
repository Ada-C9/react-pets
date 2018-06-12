import React, { Component } from 'react';
// import Pet from './components/Pet'
import PetCollection from './components/PetCollection'
import axios from 'axios';
import './App.css';

// const PET_LIST =[
//   {
//     name: 'Bogart',
//     age: 42,
//     breed: 'Mixed',
//     about: 'Best cat of all times'
//   },
//   {
//     name: 'Bagel',
//     age: 1,
//     breed: 'Beagle',
//     about: 'Bagel the Beagle'
//   }
// ];


class App extends Component {
  render() {
    return (
      <div className="App">
        <PetCollection />
      </div>
    );
  }
}

export default App;
