// src/components/NewPetForm.test.js
import React from 'react';
import NewPetForm from './NewPetForm';
import { mount, shallow } from 'enzyme';

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

  test('Capitalizes pet breeds', () => {
    const inputValue = 'new breed value';
    const outputValue = 'NEW BREED VALUE';
    const petForm = shallow(
      <NewPetForm addPetCallback={() => {} } />
    );

    // Use enzyme to select the input field we want
    let breedInput = petForm.find('input[name="breed"]');

    // Trigger a 'change' event on that field
    breedInput.simulate('change', {
      target: {
        name: 'breed',
        value: inputValue
      }
    });

    // Force an update right now, rather than "eventually"
    // render is async by default
    petForm.update();

    // Re-find our element because we re-rendered the form
    breedInput = petForm.find('input[name="breed"]');

    // Check that the input's value was updated
    expect(breedInput.getElement().props.value).toBe(outputValue);
  });

  test('Invokes callback on form submission', () => {
    const callback = jest.fn();
    const petForm = shallow(
      <NewPetForm addPetCallback={callback} />
    );

    petForm.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(callback).toHaveBeenCalled();

    
    // callback.mock.calls is a list of all the times it was invoked
    // callback.mock.calls[0] is a list of all the arguments passed to the first invocation
    expect(callback.mock.calls[0][0]).toEqual({
      name: '',
      breed: '',
      age: '',
      about: ''
    });

    // Check that the second argument was the word 'fish'
    expect(callback.mock.calls[0][1]).toEqual('fish');
  })
});
