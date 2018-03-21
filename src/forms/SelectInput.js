import React, { Fragment } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

const SelectInput = ({
  input,
  data = [],
  placeholder,
  meta: { touched, error }
}) => (
  <Fragment>
    <Select
      onChange={input.onChange}
      placeholder={placeholder}
    >
      {data.map((item, key) => (
        <Option key={key} value={item.value}>{item.label}</Option>
      ))}
    </Select>
    {touched && (error && {error})}
  </Fragment>
);

export default SelectInput;
