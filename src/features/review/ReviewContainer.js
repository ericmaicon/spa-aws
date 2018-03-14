import React from 'react';
import PropTypes from 'prop-types';
import { compose, setPropTypes } from 'recompose';

import ReviewForm from './components/ReviewForm';

export default compose(
  setPropTypes({
    review: PropTypes.object.isRequired,
  }),
)(ReviewForm);
