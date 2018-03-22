import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';

import ReviewContainer from './ReviewContainer';

const review = {
};

describe('Review', () => {
  const reviewList = () => mount(
    <ReviewContainer review={review} />
  );

  it('renders the component', () => {
    const divs = reviewList().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
