import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const { Search } = Input;

const SearchInput = ({
  input,
  placeholder = '',
  meta: { touched, error }
}) => (
  <Fragment>
    <Search
      {...input}
      placeholder={placeholder}
    />
    {touched && (error && {error})}
  </Fragment>
);

SearchInput.defaultProps = {
  placeholder: '',
  meta: { }
};

SearchInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.any,
  }).isRequired,
  placeholder: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string
  })
};

export default SearchInput;
