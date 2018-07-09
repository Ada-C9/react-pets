import React from 'react';
import { mount, shallow } from 'enzyme';

import NewPetForm from './NewPetForm';

describe('NewPetForm', () => {
  test('that is matches an existing snapshot', () => {
    // Arrange
    // Mount the component in the DOM
    // Deep rendering
      const wrapper = mount(<NewPetForm addPetCallback={() => {} }/>);

      // Assert
      expect(wrapper).toMatchSnapshot();
      // Remove the component from the DOM
      // Clean up
      wrapper.unmount();
    });

  test('when a user enters a name in the text field and the field is updated', () => {
    // Arrange
    // Shallow mounted the wrapper
    const wrapper = shallow(<NewPetForm addPetCallback={() => {} }/>);

    // find the input field
    let nameField = wrapper.find('input[name="name"]');

    // act
    nameField.simulate('change', {
      target : {
        name: 'name',
        value: 'Bob'
      }
    });
    // force the on change event because asynchronous
    wrapper.update();
    // find again because rerendered in DOM
    nameField = wrapper.find('input[name="name"]');
    expect(nameField.getElement().props.value).toEqual('Bob');

  });

  test('when a user user types on a field the value changes', () => {
    const wrapper = mount( <NewPetForm addPetCallback={() => {}} />);

    const fields = [
      {
        field: 'name',
        value: 'Bogart, the Best Cat Ever',
      },
      {
        field:  'breed',
        value: 'Who knows',
      },
      {
        field: 'age',
        value: 6,
      },
      {
        field: 'about',
        value: 'so fluffy',
      }
    ];

    fields.forEach(({field, value}) => {

      // let nameField = wrapper.find(`[name="${field}"]`);
      let nameField = wrapper.find(`input[name="${field}"]`);
      nameField.simulate('change', {target: {
          name: field,
          value,
        }});
      wrapper.update();
      // nameField = wrapper.find(`[name="${field}"]`);
      nameField = wrapper.find(`input[name="${field}"]`);
      expect(nameField.getElement().props.value).toEqual(value);
    });
  });

  test('NewPetForm can submit', () => {
    const mockAddPetCallback = jest.fn();
    // const wrapper = mount( <NewPetForm addPetCallback={() => {}} />);
    const wrapper = mount( <NewPetForm addPetCallback={mockAddPetCallback} />);

    wrapper.find(`[name="name"]`).simulate('change', {target: {
        name: 'name',
        value: "Ada",
      }});
    wrapper.update();

    wrapper.find(`[name="age"]`).simulate('change', {target: {
        name: 'age',
        value: 1,
      }});
    wrapper.update();

    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    const nameField = wrapper.find(`[name="name"]`);
    expect(nameField.getElement().props.value).toEqual('');
    expect(mockAddPetCallback).toHaveBeenCalled();
    expect(mockAddPetCallback.mock.calls[0][0]).toEqual({
      name: "Ada",
      age: 1,
      about: "",
      breed: ""

    });
  })
});