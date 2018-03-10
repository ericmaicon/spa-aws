import React from 'react';
import { compose, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';

import SearchForm from './components/SearchForm';

export default compose(
  reduxForm({
    form: 'searchForm'
  }),
  withHandlers({
    handleSearch: ({ handleSubmit }) => handleSubmit(values => {
      console.log(values);
    })
  })
)(SearchForm);
