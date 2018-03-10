import React from 'react';
import { Row, Col, Input } from 'antd';

const Search = Input.Search;

const SearchForm = () => (
  <form>
    <Row>
      <Col span={12}>
        <Search
          placeholder="Search"
          style={{ width: 200 }}
        />
      </Col>
    </Row>
  </form>
);

export default SearchForm;
