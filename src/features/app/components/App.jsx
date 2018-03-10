import React from 'react';
import { Provider } from 'react-redux';

import Search from 'features/search/Search';
import ReviewList from 'features/reviewList/ReviewList';

import store from 'appStore';
import 'styles/main.scss';

const AppForm = () => (
  <Provider store={store()}>
    <div>
      <Search />
      <ReviewList />
    </div>
  </Provider>
);

export default AppForm;
