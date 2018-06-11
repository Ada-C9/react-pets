import React, { Component } from 'react';
import PetCollection from './components/PetCollection';

import './App.css';

const PET_LIST = [
  {
    name: 'Bogart',
    age: 8,
    breed: 'Mixed',
    about: 'Bogart was Kirsten\'s Great cat!',
  },
  {
    name: 'Atticus',
    age: 2003,
    breed: 'Irish Wolfhound',
    about: 'Atticus is a somewhat senior citizen!',
  },
  {
    name: 'Bagel',
    age: 1,
    breed: 'Beagle',
    about: 'Bagel the Beagle!',
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <PetCollection petList={PET_LIST} />
      </div>
    );
  }




}

export default App;
