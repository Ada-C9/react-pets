import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Pet = (props) => {

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.breed}</td>
      <td>{props.age}</td>
      <td>{props.about}</td>
    </tr>
  );
}

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  age: PropTypes.number,
  about: PropTypes.string
};

export default Pet;
