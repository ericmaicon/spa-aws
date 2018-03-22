import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

const SelectInput = ({
  input,
  data = [],
  placeholder = '',
  meta: { touched, error }
}) => (
  <Fragment>
    <Select
      {...input}
      placeholder={placeholder}
    >
      {data.map(item => (
        <Option key={item.value} value={item.value}>{item.label}</Option>
      ))}
    </Select>
    {touched && (error && {error})}
  </Fragment>
);

SelectInput.defaultProps = {
  data: [],
  placeholder: '',
  meta: {},
};

SelectInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.any,
  }).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string
  })
};

export default SelectInput;
