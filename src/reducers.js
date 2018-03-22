import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { loaderReducer as loader } from 'features/loader/loader';
import { reviewReducer as review } from 'features/review/review';

export default combineReducers({
  form,
  loader,
  review
});
