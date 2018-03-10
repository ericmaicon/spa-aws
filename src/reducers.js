import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { reviewReducer as review } from 'features/review/review';

export default combineReducers({
  form,
  review
});
