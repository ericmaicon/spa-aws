import React from 'react';
import { mount } from 'enzyme';

import AppForm from './components/AppForm';

describe('App', () => {
  const app = () => {
    return mount(
      <AppForm />
    );
  };

  it('renders the component', () => {
    const divs = app().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
