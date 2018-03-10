import React, { Fragment } from 'react';
import { Row, Col, Avatar } from 'antd';

const ReviewForm = ({
  review
}) => (
  <Fragment>
    <h2 className='review-title'>
      DECEMBER
    </h2>
    <div className='review'>
      <div className='review-header'>
        <Avatar shape="square" size="large" icon="user" />
        <div className='review-header-content'>
          <label>Date</label>
          <p>{review.reviewCreated}</p>
        </div>
        <div className='review-header-content'>
          <label>Stars</label>
          <p>{review.stars}</p>
        </div>
        <div className='review-header-content'>
          <label>{review.reviewId}</label>
          <p>{review.authorId}</p>
        </div>
      </div>
      <div className='review-content'>
        <h3>{review.title}</h3>
        <p>{review.content}</p>
      </div>
    </div>
  </Fragment>
);

export default ReviewForm;
