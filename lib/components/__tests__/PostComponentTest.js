import React from 'react';
import PostComponent from '../postings/PostComponent.jsx';

import renderer from 'react-test-renderer';

describe('PostComponent', () => {

  const testProps = {
    post: {},
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <PostComponent
        {...testProps}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();

  });
});
