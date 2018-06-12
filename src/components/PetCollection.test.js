import React from 'react';
import PetCollection from './PetCollection';
import { mount, shallow } from 'enzyme';

describe('PetCollection', () => {
  test('deep mount', () => {
    const petCollection = mount(
      <PetCollection updateStatusCallback={()=>{}} />
    );

    expect(petCollection).toMatchSnapshot();

    petCollection.unmount();
  });

  test('shallow mount', () => {
    const petCollection = shallow(
      <PetCollection updateStatusCallback={()=>{}} />
    );

    expect(petCollection).toMatchSnapshot();

    
  });
});
