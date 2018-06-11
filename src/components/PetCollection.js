import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Pet from './Pet';
import NewPetForm from './NewPetForm';

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
        console.log('Error :(');
        console.log(error);

        // Get something on the screen so the user knows
        this.props.updateStatusCallback(error.message, 'error');

        // This is what we would have done w/ jQuery.
        // But, in React everything on the screen comes
        // through rendering.
        // $('.status').html(error.message)
      });
  }

  addPet = (pet) => {
    let updatedPets = this.state.pets;
    updatedPets.push(pet);

    this.setState({ pets: updatedPets });
  }

  render() {
    const pets = this.state.pets.map((pet, index) => {
      return <Pet key={index}
        name={pet.name}
        breed={pet.breed}
        age={pet.age}
        about={pet.about} />
    });

    return (
      <section>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Breed</th>
              <th>Age</th>
              <th>About</th>
            </tr>
            { pets }
          </tbody>
        </table>

        <NewPetForm addPetCallback={this.addPet}/>
      </section>
    );
  }
}

export default PetCollection;
