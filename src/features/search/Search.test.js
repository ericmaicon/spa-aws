import React from 'react';
import { mount } from 'enzyme';

import Search from './Search';

describe('Search', () => {
  const search = () => {
    return mount(
      <Search />
    );
  };

  it('renders the component', () => {
    const divs = search().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
