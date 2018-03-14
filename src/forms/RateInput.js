import React, { Fragment, Component } from 'react';
import { Row, Col, Icon } from 'antd';

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
          <Col xs={12} lg={4}>
            <Checkbox
              value={1}
              onChange={this.handleChange}
              checked={input.value >= 1}
            />
          </Col>
          <Col xs={12} lg={4}>
            <Checkbox
              value={2}
              onChange={this.handleChange}
              checked={input.value >= 2}
            />
          </Col>
          <Col xs={12} lg={4}>
            <Checkbox
              value={3}
              onChange={this.handleChange}
              checked={input.value >= 3}
            />
          </Col>
          <Col xs={12} lg={4}>
            <Checkbox
              value={4}
              onChange={this.handleChange}
              checked={input.value >= 4}
            />
          </Col>
          <Col xs={12} lg={4}>
            <Checkbox
              value={5}
              onChange={this.handleChange}
              checked={input.value >= 5}
            />
          </Col>
        </Row>
        {touched && (error && {error})}
      </Fragment>
    );
  }
}
