import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

import AppForm from 'features/app/components/AppForm';

ReactDOM.render(
  <AppForm />, // eslint-disable-line react/jsx-filename-extension
  document.getElementById('app')
);
