import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewPetForm extends Component {
  static propTypes = {
    addPetCallback: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this.state = {
      name: '',
      breed: '',
      age: '',
      about: ''
    };
  }

  onInputChange = (event) => {
    const key = event.target.name;
    let value = event.target.value;

    if (key === 'breed') {
      value = value.toUpperCase();
    }

    let updatedInput = {};
    updatedInput[key] = value;
    this.setState(updatedInput);
    // "name" : event.target.value
    // event.target.name
    // event.target.value
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addPetCallback(this.state, 'fish');

    this.setState({
      name: '',
      breed: '',
      age: '',
      about: ''
    });
  }

  buildInput(key, text) {
    return (
      <div>
        <label htmlFor={key}>{text}</label>
        <input type="text"
          name={key}
          value={this.state[key]}
          onChange={this.onInputChange}/>
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        {this.buildInput('name', 'Name')}
        {this.buildInput('breed', 'Breed')}
        {this.buildInput('age', 'Age')}
        {this.buildInput('about', 'About')}
        <div>
          <input type="submit"/>
        </div>
      </form>
    );
  }
}

export default NewPetForm;
