import React from 'react';
import ModalComponent from '../postings/ModalComponent.jsx';

import renderer from 'react-test-renderer';

describe('PostComponent', () => {

  const testProps = {
    selectedPost: {},
    closeModal: jest.fn(() => ({}))
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <ModalComponent
        {...testProps}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();

  });
});
