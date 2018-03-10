import React, { Fragment } from 'react';
import { Checkbox, Row, Col, Icon } from 'antd';

const CheckboxInput = ({
  input,
  data = [],
  placeholder,
  meta: { touched, error }
}) => (
  <Fragment>
    <Checkbox.Group onChange={input.onChange}>
      <Row>
        {data.map(item => (
          <Col key={item.value} span={8}>
            <Checkbox value={item.value}>
              {item.label} <Icon type='star' />
            </Checkbox>
          </Col>
        ))}
      </Row>
    </Checkbox.Group>
    {touched && (error && {error})}
  </Fragment>
);

export default CheckboxInput;
