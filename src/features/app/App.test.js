import React from 'react';
import { mount } from 'enzyme';

import App from './components/App';

describe('App', () => {
  const app = () => {
    return mount(
      <App />
    );
  };

  it('renders the component', () => {
    const divs = app().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
