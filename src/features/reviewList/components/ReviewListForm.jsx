import React, { Fragment } from 'react';
import { Row, Col, Alert } from 'antd';

import ReviewContainer from 'features/review/ReviewContainer';

const ReviewListForm = ({
  reviews
}) => (
  <Fragment>
    {Object.keys(reviews).length === 0 && (
      <Row gutter={8}>
        <Col lg={12} xs={24} md={24}>
          <Alert message="There is no review with the selected filter" type="error" />
        </Col>
      </Row>
    )}

    <Row gutter={8} className='reviewList'>
      <Col lg={12} xs={24} md={24}>
        {reviews.map((review, key) => (
          <Row gutter={8} key={key}>
            <Col>
              <ReviewContainer key={review.reviewId} review={review} />
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
  </Fragment>
);

export default ReviewListForm;
