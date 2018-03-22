import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon } from 'antd';
import _ from 'lodash';

const Checkbox = ({
  value,
  onChange,
  checked = false
}) => (
  <div className="rate-input-container">
    <div className="rate-input">
      <input
        type="checkbox"
        value={value}
        id={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={value}></label>
    </div>
    <label className='rate-input-label'>{value}</label>
    <Icon type="star" />
  </div>
);

export default class CheckboxInput extends Component {
  handleChange = (e) => {
    const { input } = this.props;

    input.onChange(e.target.value);
  }

  render() {
    const {
      input,
      placeholder,
      meta: { touched, error }
    } = this.props;

    return (
      <Fragment>
        <Row>
          {_.range(1, 6).map(index => (
            <Col xs={12} lg={4} key={index}>
              <Checkbox
                value={index}
                onChange={this.handleChange}
                checked={input.value >= index}
              />
            </Col>
          ))}
        </Row>
        {touched && (error && {error})}
      </Fragment>
    );
  }
}
