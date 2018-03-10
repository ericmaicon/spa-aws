import React from 'react';
import { Row, Col } from 'antd';

import Review from 'features/review/Review';

const ReviewListForm = () => (
  <Row gutter={12} type='flex' className='reviewList'>
    <Col span={12}>
      <Review />
      <Review />
      <Review />
    </Col>
  </Row>
);

export default ReviewListForm;
