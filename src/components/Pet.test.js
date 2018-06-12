import React from 'react';
import { mount, shallow } from 'enzyme';

import Pet from './Pet';


describe('Pet', () => {
  test('that is matches an existing snapshot', () => {
    // Arrange
    // Mount the component in the DOM
    // Deep rendering
    const wrapper = shallow(<Pet
      name="Pete"
      breed="Pomeranian"
      age={23}
      about="cute!"
    />);

    // Assert
    expect(wrapper).toMatchSnapshot();
    // Remove the component from the DOM
    // Clean up
    wrapper.unmount();
  });
});