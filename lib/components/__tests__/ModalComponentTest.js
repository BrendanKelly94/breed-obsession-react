import React from 'react';
import ModalComponent from '../postings/ModalComponent.jsx';

import { shallow } from 'enzyme';

describe('PostComponent', () => {

  const testProps = {
    selectedPost: {},
    closeModal: jest.fn(() => ({}))
  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <ModalComponent
        {...testProps}
      />
    );

    expect(wrapper).toMatchSnapshot();

  });
});
