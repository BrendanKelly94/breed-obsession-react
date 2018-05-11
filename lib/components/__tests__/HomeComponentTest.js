import React from 'react';
import HomeComponent from '../home/HomeComponent.jsx';
import { MemoryRouter } from 'react-router-dom';

import renderer from 'react-test-renderer';

describe('HomeComponent', () => {

  const testProps = {
    breeds: [],
    cities: [],
    setBreed: jest.fn(() => ({})),
    setCity: jest.fn(() => ({})),
    setSex: jest.fn(() => ({})),
    setSize: jest.fn(() => ({})),
    setAge: jest.fn(() => ({})),
    fetchCities: jest.fn(() => ({})),
    fetchBreeds: jest.fn(() => ({}))
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <HomeComponent
          {...testProps}
        />
      </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();

  });
});
