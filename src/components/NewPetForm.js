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

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h2>Test header</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text"
            name="name"
            value={this.state.name}
            onChange={this.onInputChange}/>
        </div>
        <div>
          <label htmlFor="breed">Breed</label>
          <input type="text"
            name="breed"
            value={this.state.breed}
            onChange={this.onInputChange}/>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="text"
            name="age"
            value={this.state.age}
            onChange={this.onInputChange}/>
        </div>
        <div>
          <label htmlFor="about">About</label>
          <input type="text"
            name="about"
            value={this.state.about}
            onChange={this.onInputChange}/>
        </div>
        <div><input type="submit"/>
        </div>
      </form>
    );
  }
}

export default NewPetForm;
