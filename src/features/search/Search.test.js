import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Search from './Search';

const mockStore = configureStore([]);
const store = mockStore({
});

describe('Search', () => {
  const search = () => {
    return mount(
      <Provider store={store}>
        <Search />
      </Provider>
    );
  };

  it('renders the component', () => {
    const divs = search().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
