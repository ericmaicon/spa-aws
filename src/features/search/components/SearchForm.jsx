import React from 'react';
import { Row, Col, Button } from 'antd';
import { Field } from 'redux-form';

import SearchInput from 'forms/SearchInput';
import SelectInput from 'forms/SelectInput';
import RateInput from 'forms/RateInput';
import { groupArray, sortArray } from '../search';

const SearchForm = ({
  handleSubmit
}) => (
  <form onSubmit={handleSubmit} className='search'>
    <Row gutter={12} type='flex'>
      <Col span={6}>
        <Field
          name='search'
          component={SearchInput}
          placeholder='Search'
        />
      </Col>
    </Row>
    <Row gutter={12} type='flex'>
      <Col className="gutter-row" span={3}>
        <Field
          name='group_by'
          component={SelectInput}
          placeholder='Group by'
          data={groupArray}
        />
      </Col>
      <Col className="gutter-row" span={3}>
        <Field
          name='order_by'
          component={SelectInput}
          placeholder='Order by'
          data={sortArray}
        />
      </Col>
    </Row>
    <Row type='flex'>
      <Col span={6}>
        <label>Filter by:</label>
        <Field
          name='rate'
          component={RateInput}
        />
      </Col>
    </Row>
    <Row gutter={12} type='flex'>
      <Col span={12} className='text-right'>
        <Button
          type="primary"
          htmlType="submit"
        >
          REFRESH
        </Button>
      </Col>
    </Row>
  </form>
);

export default SearchForm;
