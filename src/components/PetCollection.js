import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import Pet from './Pet';
import NewPetForm from './NewPetForm';

class PetCollection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pets: [],
    }
  }

  componentDidMount = () => {
    console.log('Component did mount was called');

    axios.get('https://petdibs.herokuapp.com/pets/')
      .then( (response) => {
        console.log( response.data );
        this.setState({
          pets: response.data
        });
      } )
      .catch( (error) => {
        console.log("got to the error");
        console.log(error);
        this.setState({
          error: error.message
        });
      } );
  }

  renderPetList = () => {
    console.log('Rendering Pet List');
    const componentList = this.state.pets.map((pet, index) => {
      return (
        <Pet
          key={index}
          name={pet.name}
          age={pet.age}
          breed={pet.breed}
          about={pet.about}
        />
      );
    });

    return componentList;
  }

  addPet = (pet) => {
    const petList = this.state.pets;


    axios.post('https://petdibs.herokuapp.com/pets/',
                pet)
      .then((response) => {
        // Pet Successfully added

        petList.push(pet);
        this.setState({
          petList,
          message: `Successfully Added ${pet.name}`
        });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          message: error.message,
        });

      });


  }

  render() {
    return (
      <section>
        <header>
          {this.state.message ? this.state.message: ""  }
        </header>
        {this.renderPetList()}
        <NewPetForm addPetCallback={this.addPet} />
      </section>
    )
  }
}

PetCollection.propTypes = {
}




export default PetCollection;
