import React from 'react';
import CarouselComponent from '../postings/CarouselComponent.jsx';

import { shallow } from 'enzyme';

describe('CarouselComponent', () => {

  const testProps = {
    pics: []
  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <CarouselComponent
        {...testProps}
      />
    );

    expect(wrapper).toMatchSnapshot();

  });
});
