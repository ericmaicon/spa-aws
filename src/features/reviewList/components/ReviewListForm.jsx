import React, { Fragment } from 'react';
import { Row, Col, Alert } from 'antd';

import Review from 'features/review/Review';

const ReviewListForm = ({
  groupedReviews
}) => (
  <Fragment>
    {Object.keys(groupedReviews).length === 0 && (
      <Row gutter={12}>
        <Col span={12}>
          <Alert message="There is no review with the selected filter" type="error" />
        </Col>
      </Row>
    )}

    <Row type='flex' gutter={12} className='reviewList'>
      <Col span={12}>
        {Object.keys(groupedReviews).map(key => (
          <Fragment key={key}>
            <h2 className='review-title'>
              {key}
            </h2>
            {groupedReviews[key].map(review => <Review key={review.reviewId} review={review} />)}
          </Fragment>
        ))}
      </Col>
    </Row>
  </Fragment>
);

export default ReviewListForm;
