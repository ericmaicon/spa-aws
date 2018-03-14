import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import SearchContainer from 'features/search/SearchContainer';
import ReviewListContainer from 'features/reviewList/ReviewListContainer';

import store from 'appStore';
import 'styles/main.scss';

const AppForm = () => (
  <Provider store={store()}>
    <Fragment>
      <SearchContainer />
      <ReviewListContainer />
    </Fragment>
  </Provider>
);

export default AppForm;
