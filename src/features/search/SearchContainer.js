import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';

import { filterReviews } from 'features/review/review';
import SearchForm from './components/SearchForm';

const mapStateToProps = () => ({
  initialValues: {
    rate: 5
  }
});

export default compose(
  connect(mapStateToProps, {}),
  reduxForm({
    form: 'searchForm',
    onSubmit: (values, dispatch) => dispatch(filterReviews(values))
  }),
)(SearchForm);
