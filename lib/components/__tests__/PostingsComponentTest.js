import React from 'react';
import PostingsComponent from '../postings/PostingsComponent.jsx';

import { shallow } from 'enzyme';


describe('PostingsComponent', () => {
  const testPost = {
    age:'Adult',
    breed:'Anatolian Shepherd, Akita',
    city:'Los Angeles',
    description:undefined,
    email:undefined,
    id:'40712419',
    name:'SONNY',
    phone:'(213) 485-0214',
    pics:[{'@size': 'x', '$t': 'http://photos.petfinder.com/photos/pets/40712419/1/?bust=1517392734&width=500&-x.jpg', '@id': '1'}],
    sex:'M',
    state:'CA',
    status:'A',
    street:'undefined1850 W. 60th St.',
    thumbnail:'http://photos.petfinder.com/photos/pets/40712419/1/?bust=1517392734&width=500&-x.jpg',
    zip:'90047'
  };

  const defaultTestProps = {
    selectedPost:{},
    isModalOpen:false,
    offset: 25,
    postings: [testPost],
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

  const withBackButtonProps = {
    selectedPost:{},
    isModalOpen:false,
    offset: 50,
    postings: [testPost],
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
    const wrapper = shallow(
      <PostingsComponent
        {...defaultTestProps}
      />
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('does not render back button when on first page', () => {
    const wrapper = shallow(
      <PostingsComponent
        {...defaultTestProps}
      />
    );

    expect(wrapper.find('#back-button').exists()).toEqual(false);
  });

  it('renders back button when not first page', () => {
    const wrapper = shallow(
      <PostingsComponent
        {...withBackButtonProps}
      />
    );

    expect(wrapper.find('#back-button').exists()).toEqual(true);
  });

});
