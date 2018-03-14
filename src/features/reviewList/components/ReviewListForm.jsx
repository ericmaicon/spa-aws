import React, { Fragment } from 'react';
import { Row, Col, Alert } from 'antd';

import ReviewContainer from 'features/review/ReviewContainer';

const ReviewListForm = ({
  groupedReviews
}) => (
  <Fragment>
    {Object.keys(groupedReviews).length === 0 && (
      <Row gutter={8}>
        <Col lg={12} xs={24} md={24}>
          <Alert message="There is no review with the selected filter" type="error" />
        </Col>
      </Row>
    )}

    <Row gutter={8} className='reviewList'>
      <Col lg={12} xs={24} md={24}>
        {Object.keys(groupedReviews).map(key => (
          <Fragment key={key}>
            <h2 className='review-title'>
              {key}
            </h2>
            <Row gutter={8}>
              <Col>
                {groupedReviews[key].map(review => <ReviewContainer key={review.reviewId} review={review} />)}
              </Col>
            </Row>
          </Fragment>
        ))}
      </Col>
    </Row>
  </Fragment>
);

export default ReviewListForm;
