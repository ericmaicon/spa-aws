import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';

import AppForm from './components/AppForm';

describe('App', () => {
  const app = () => mount(
    <AppForm />
  );

  it('renders the component', () => {
    const divs = app().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
