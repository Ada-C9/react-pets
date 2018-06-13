import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import NewPetForm from './NewPetForm';
import PetTable from './PetTable';

const PETS_URL = 'https://petdibs.herokuapp.com/pets';

class PetCollection extends Component {
  static propTypes = {
    updateStatusCallback: PropTypes.func.isRequired
  };

  constructor() {
    super();

    // Set state to the static data from props
    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    this.props.updateStatusCallback('Loading pets...', 'success');

    axios.get(PETS_URL)
      .then((response) => {
        console.log('Success!');
        console.log(response);

        this.props.updateStatusCallback('Successfully loaded pets!', 'success');

        // Do some pre-processing on the data
        const pets = response.data.slice(0, 100);
        this.setState({ pets: pets });
      })
      .catch((error) => {
        // console.log('Error :(');
        // console.log(error);

        // Get something on the screen so the user knows
        this.props.updateStatusCallback(error.message, 'error');

        // This is what we would have done w/ jQuery.
        // But, in React everything on the screen comes
        // through rendering.
        // $('.status').html(error.message)
      });
  }

  addPet = (pet) => {
    axios.post(PETS_URL, pet)
      .then((response) => {
        console.log(response);
        this.props.updateStatusCallback(`Successfully added pet ${ pet.name }!`, 'success');

        let updatedPets = this.state.pets;
        updatedPets.push(pet);

        this.setState({ pets: updatedPets });
      })
      .catch((error) => {
        this.props.updateStatusCallback(`Error adding pet ${ pet.name }.`, 'error');
      });
  }

  render() {


    return (
      <section>
        <PetTable pets={this.state.pets} />

        <NewPetForm addPetCallback={this.addPet}/>
      </section>
    );
  }
}

export default PetCollection;
