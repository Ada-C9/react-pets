import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from './Pet';
import NewPetForm from './NewPetForm';

class PetCollection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      petList: props.petList,
    }
  }

  renderPetList = () => {
    console.log('Rendering Pet List');
    const componentList = this.state.petList.map((pet, index) => {
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
    const petList = this.state.petList;

    petList.push(pet);
    this.setState({
      petList,
    });

  }

  render() {
    return (
      <section>
        {this.renderPetList()}
        <NewPetForm addPetCallback={this.addPet} />
      </section>
    )
  }
}

PetCollection.propTypes = {
  petList: PropTypes.array.isRequired,
}




export default PetCollection;
