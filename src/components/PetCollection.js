import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from './Pet';
import NewPetForm from './NewPetForm';
import axios from 'axios'

class PetCollection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    axios.get('https://petdibs.herokuapp.com/pets')
      .then((response) => {
        console.log(response.data);
        this.setState({
          pets: response.data
        });
      })
      .catch((error) => {
        // this.setState({
        //   error: error.message
        // });
      });
  }

  // componentWillUnmount = () => {
  //   console.log(this.props.id);
  //   const url = '' + this.props.id;
  //   console.log(url);
  //   axios.delete(url)
  //     .then((response) => {
  //       // console.log(response.data);
  //       // this.setState({
  //       //   cards: response.data
  //       // });
  //     })
  //     .catch((error) => {
  //       this.setState({
  //         error: error.message
  //       });
  //     });
  // };

  renderPetList = () => {
    const componentList = this.state.pets.map((pet, index) => {
      return (
        <Pet
          key={index}
          name={pet.name}
          age={pet.age}
          breed={pet.breed}
          about={pet.about}
          />
      )
    });
    return componentList;
  };

  addPet = (pet) => {
    const pets = this.state.pets;

    axios.post('https://petdibs.herokuapp.com/pets', pet)
      .then((response) => {
        pets.push(pet);
        pets.setState({
          pets,
          message: `Successfully Added ${pet.name}`
        });
      })
      .catch((error) => {
        console.log(error.message);
        pets.setState({
          message: error.message
        });
      });
  };

  render() {
    return (
      <section>
        <header>
          {this.state.message ? this.state.message : ""}
        </header>
        {this.renderPetList()}
        <NewPetForm addPetCallback={this.addPet}/>
      </section>
    )
  }
}

PetCollection.protoTypes = {
  // pets: PropTypes.array.isRequired,
};

export default PetCollection;
