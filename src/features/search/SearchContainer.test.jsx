import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import expect from 'expect';

import SearchContainer from './SearchContainer';

const mockStore = configureStore([]);
const store = mockStore({
});

describe('SearchContainer', () => {
  const search = () => mount(
    <Provider store={store}>
      <SearchContainer />
    </Provider>
  );

  it('renders the component', () => {
    const divs = search().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
