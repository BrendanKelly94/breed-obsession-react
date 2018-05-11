import React from 'react';
import SelectComponent from '../home/SelectComponent.jsx';

import renderer from 'react-test-renderer';

describe('SelectComponent', () => {

  const testProps = {
    items: [],
    callback: jest.fn(() => ({})),
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <SelectComponent
        {...testProps}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();

  });
});
