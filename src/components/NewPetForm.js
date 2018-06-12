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
    let updatedInput = {};
    updatedInput[event.target.name] = event.target.value;
    this.setState(updatedInput);
    // "name" : event.target.value
    // event.target.name
    // event.target.value
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addPetCallback(this.state);

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
        <h2>Test header</h2>
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
