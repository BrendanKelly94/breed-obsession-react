import React from 'react';
import PostingsComponent from '../postings/PostingsComponent.jsx';


import renderer from 'react-test-renderer';

describe('PostingsComponent', () => {

  const testProps = {
    selectedPost:{},
    isModalOpen:false,
    offset: 0,
    postings: [],
    animal: 'dog',
    breed: 'pug',
    State: 'California',
    city: '',
    sex: '',
    size: '',
    age: '' ,
    back: jest.fn(() => ({})),
    forward: jest.fn(() => ({})),
    selectPost: jest.fn(() => ({})),
    closeModal: jest.fn(() => ({}))
  };

  it('renders correctly', () => {
    const tree = renderer.create(

      <PostingsComponent
        {...testProps}
      />

    ).toJSON();

    expect(tree).toMatchSnapshot();

  });
});
