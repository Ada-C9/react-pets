import React from 'react';
import { mount } from 'enzyme';

import NewPetForm from './NewPetForm';

describe('NewPetForm', () => {
  test('that is matches an existing snapshot', () => {
    // Arrange
    // Mount the component in the DOM
    // Deep rendering
      const wrapper = mount(<NewPetForm />);

      // Assert
      expect(wrapper).toMatchSnapshot();
      // Remove the component from the DOM
      // Clean up
      wrapper.unmount();
    });
});