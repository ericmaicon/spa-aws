import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Alert } from 'antd';

import ReviewContainer from 'features/review/ReviewContainer';

const ReviewListForm = ({
  parsedReviews
}) => (
  <Fragment>
    {Object.keys(parsedReviews).length === 0 && (
      <Row gutter={8}>
        <Col lg={12} xs={24} md={24}>
          <Alert message="There is no review with the selected filter" type="error" />
        </Col>
      </Row>
    )}

    <Row gutter={8} className='reviewList'>
      <Col lg={12} xs={24} md={24}>
        {parsedReviews.map(review => (
          <Row gutter={8} key={review.reviewId}>
            <Col>
              <ReviewContainer key={review.reviewId} review={review} />
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
  </Fragment>
);

ReviewListForm.propTypes = {
  parsedReviews: PropTypes.arrayOf(PropTypes.object).isRequired
};


export default ReviewListForm;
