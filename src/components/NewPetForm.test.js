// src/components/NewPetForm.test.js
import React from 'react';
import NewPetForm from './NewPetForm';
import { mount } from 'enzyme';

describe('NewPetForm', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = mount( <NewPetForm addPetCallback={() => {} } />);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();

    // Remove the component from the DOM (save memory and prevent side effects).
    wrapper.unmount();
  });
});
