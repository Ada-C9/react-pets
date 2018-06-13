import React from 'react';
import PropTypes from 'prop-types';

import Pet from './Pet';

const PetTable = (props) => {
  const pets = props.pets.map((pet, index) => {
    return <Pet key={index}
      name={pet.name}
      breed={pet.breed}
      age={pet.age}
      about={pet.about} />
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Breed</th>
          <th>Age</th>
          <th>About</th>
        </tr>
      </thead>
      <tbody>
        { pets }
      </tbody>
    </table>
  );
};

PetTable.propTypes = {
  pets: PropTypes.array.isRequired
}

export default PetTable;
