import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pet extends Component {

  render() {
    console.log('Rendering');
    return (
      <article>
         <h3>Pet {this.props.name} </h3>
         <p><strong>Age: </strong> {this.props.age}</p>
         <p><strong>Breed: </strong> {this.props.breed}</p>
         <p>{this.props.about}</p>
      </article>
    )
  }
}

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  age:  PropTypes.number.isRequired,
  breed: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};






export default Pet;
