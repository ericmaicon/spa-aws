import React from 'react';
import { Row, Col } from 'antd';

import Review from 'features/review/Review';

const ReviewListForm = ({
  reviews
}) => (
  <Row gutter={12} type='flex' className='reviewList'>
    <Col span={12}>
      {reviews.map(review => <Review key={review.reviewId} review={review} />)}
    </Col>
  </Row>
);

export default ReviewListForm;
