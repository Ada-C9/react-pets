import React, { Component } from 'react';
import './App.css';
import PetCollection from './components/PetCollection';
import Status from './components/Status';

class App extends Component {
  constructor() {
    super();

    this.state = {
      status: {
        message: 'loaded the page',
        type: 'success'
      }
    }
  }

  updateStatus = (message, type) => {
    this.setState({
      status: {
        message: message,
        type: type
      }
    })
  }

  render() {

    return (
      <div className="App">
        <Status
          message={this.state.status.message}
          types={this.state.status.type}
          />
        <PetCollection
          updateStatusCallback={this.updateStatus}
          />
      </div>
    );
  }
}

export default App;
