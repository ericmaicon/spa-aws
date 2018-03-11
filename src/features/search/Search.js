import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';

import SearchForm from './components/SearchForm';
import { filterReviews } from 'features/review/review';

const onSubmit = (values, dispatch) => dispatch(filterReviews(values));

const mapStateToProps = (state) => {
  return {
    initialValues: {
      rate: 5
    }
  };
};

export default compose(
  connect(mapStateToProps, {}),
  reduxForm({
    form: 'searchForm',
    onSubmit
  })
)(SearchForm);
