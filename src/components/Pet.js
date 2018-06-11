import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pet extends Component {
  // could have each field come in individually
  // could have a single object that contains each field

  static propTypes = {
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    age: PropTypes.number,
    about: PropTypes.string
  };

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.breed}</td>
        <td>{this.props.age}</td>
        <td>{this.props.about}</td>
      </tr>
    );
  }
}

export default Pet;
