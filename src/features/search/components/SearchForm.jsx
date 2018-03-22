import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col, Button } from 'antd';
import { Field } from 'redux-form';

import SearchInput from 'forms/SearchInput';
import SelectInput from 'forms/SelectInput';
import RateInput from 'forms/RateInput';
import { sortArray } from '../search';

const FormItem = Form.Item;

const SearchForm = ({
  handleSubmit
}) => (
  <Row gutter={8}>
    <Col lg={12} xs={24} md={24}>
      <Form onSubmit={handleSubmit} className='search'>
        <FormItem>
          <Field
            name='search'
            component={SearchInput}
            placeholder='Search'
          />
        </FormItem>
        <FormItem>
          <Field
            name='order_by'
            component={SelectInput}
            placeholder='Order by'
            data={sortArray}
          />
        </FormItem>
        <FormItem>
          <span>Filter by:</span>
          <Field
            name='rate'
            component={RateInput}
          />
        </FormItem>
        <FormItem className='text-right'>
          <Button
            type="primary"
            htmlType="submit"
          >
            REFRESH
          </Button>
        </FormItem>
      </Form>
    </Col>
  </Row>
);

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};


export default SearchForm;
