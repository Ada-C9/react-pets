import React from 'react';
import { mount, shallow } from 'enzyme';

import NewPetForm from './NewPetForm';

describe('NewPetForm', () => {
  test('that it matches an existing snapshot', () => {
    // Arrange
    // Mount the component in the DOM
    // Deep Rendering
    const wrapper = shallow(<NewPetForm
      addPetCallback={() => {} }
      />);

    // Assert
    expect(wrapper).toMatchSnapshot();
    // Remove the component from the DOM
    // Clean up Clean up Everybody..
    wrapper.unmount();
  });

  test('When a user enters a name in a \
  text field the field is updated', () => {
    // Arrange
    // Shallow Mounted the wrapper
    const wrapper = shallow(<NewPetForm
      addPetCallback={() => {} }
      />);

    // find the input field
    let nameField =
        wrapper.find('input[name="name"]');

    // Act
    nameField.simulate('change', {
      target: {
        name: 'name',
        value: 'Bob',
      },
    });
    // Force the onChange event
    wrapper.update();
    nameField =
        wrapper.find('input[name="name"]');

    // Assert
    expect(nameField.getElement().props.value)
      .toEqual('Bob');

  });

  test('when the user types on a field the value changes', () => {
    // Arrange
    // Shallow Mounted the wrapper
    const wrapper = shallow(<NewPetForm
      addPetCallback={() => {} }
      />);

    const fields = [
      {
        field: 'name',
        value: 'Bob',
      },
      {
        field: 'age',
        value: 3,
      },
      {
        field: 'breed',
        value: 'mutt',
      },
      {
        field: 'about',
        value: 'great mutt!',
      }
    ];


    fields.forEach(({field, value}) => {
      // find the input field
      let nameField =
          wrapper.find(`[name="${field}"]`);

      // Act
      nameField.simulate('change', {
        target: {
          name: field,
          value,
        },
      });
      // Force the onChange event
      wrapper.update();
      nameField =
          wrapper.find(`[name="${field}"]`);

      // Assert
      expect(nameField.getElement().props.value)
        .toEqual(value);

    });
  });









});
