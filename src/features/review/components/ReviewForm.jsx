import _ from 'lodash';
import React, { Fragment } from 'react';
import { Row, Col, Avatar, Icon } from 'antd';

const ReviewForm = ({
  review
}) => (
  <div className='review'>
    <div className='review-header'>
      <Avatar shape="square" size="large" icon="user" />
      <div className='review-header-content'>
        <label>Date</label>
        <p>{review.formatDate}</p>
      </div>
      <div className='review-header-content'>
        <label>Stars</label>
        <p>
          {_.range(review.stars).map(star => (
            <Icon type='star' key={star} />
          ))}
          {_.range(5-review.stars).map(star => (
            <Icon type='star-o' key={star} />
          ))}
        </p>
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
);

export default ReviewForm;
