import React from 'react';
import { Row, Col, Button } from 'antd';
import { Field } from 'redux-form';

import SearchInput from 'forms/SearchInput';
import SelectInput from 'forms/SelectInput';
import RateInput from 'forms/RateInput';
import { GROUP_BY_DAY, GROUP_BY_WEEK, GROUP_BY_MONTH, SORT_BY_ASC, SORT_BY_DESC } from 'features/review/review';

const rateArray = [
  {
    value: 1,
    label: 1
  },
  {
    value: 2,
    label: 2
  },
  {
    value: 3,
    label: 3
  },
  {
    value: 4,
    label: 4
  },
  {
    value: 5,
    label:5
  },
];

const groupArray = [
  {
    value: GROUP_BY_DAY,
    label: 'Day'
  },
  {
    value: GROUP_BY_WEEK,
    label: 'Week'
  },
  {
    value: GROUP_BY_MONTH,
    label: 'Month'
  },
];

const sortArray = [
  {
    value: SORT_BY_ASC,
    label: 'ASC'
  },
  {
    value: SORT_BY_DESC,
    label: 'DESC'
  }
];

const SearchForm = ({
  handleSearch
}) => (
  <form onSubmit={handleSearch}>
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
          data={rateArray}
          component={RateInput}
        />
      </Col>
    </Row>
    <Row gutter={12} type='flex'>
      <Col span={12}>
        <Row gutter={12} justify='end' type='flex'>
          <Button
            type="primary"
            htmlType="submit"
          >
            REFRESH
          </Button>
        </Row>
      </Col>
    </Row>
  </form>
);

export default SearchForm;
