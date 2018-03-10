import React from 'react';
import { mount } from 'enzyme';

import Review from './Review';

describe('Review', () => {
  const reviewList = () => {
    return mount(
      <Review />
    );
  };

  it('renders the component', () => {
    const divs = reviewList().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
