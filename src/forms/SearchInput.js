import React, { Fragment } from 'react';
import { Input } from 'antd';

const Search = Input.Search;

const SearchInput = ({
  input,
  placeholder,
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

export default SearchInput;
