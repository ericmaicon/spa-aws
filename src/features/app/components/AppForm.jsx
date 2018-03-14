import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import SearchContainer from 'features/search/SearchContainer';
import ReviewList from 'features/reviewList/ReviewList';

import store from 'appStore';
import 'styles/main.scss';

const AppForm = () => (
  <Provider store={store()}>
    <Fragment>
      <SearchContainer />
      <ReviewList />
    </Fragment>
  </Provider>
);

export default AppForm;
