import _ from 'lodash';
import React, { Fragment } from 'react';
import { Row, Col, Avatar, Icon } from 'antd';

const ReviewForm = ({
  review
}) => (
  <div className='review'>
    <Row gutter={8} className='review-header'>
      <Col lg={6} xs={24} md={24}>
        <Avatar shape="square" size="large" icon="user" />
      </Col>
      <Col lg={6} xs={24} md={24}>
        <label>Date</label>
        <p>{review.formatDate}</p>
      </Col>
      <Col lg={6} xs={24} md={24}>
        <label>Stars</label>
        <p>
          {_.range(review.stars).map(star => (
            <Icon type='star' key={star} />
          ))}
          {_.range(5-review.stars).map(star => (
            <Icon type='star-o' key={star} />
          ))}
        </p>
      </Col>
      <Col lg={6} xs={24} md={24}>
        <label>{review.reviewId}</label>
        <p>{review.authorId}</p>
      </Col>
    </Row>
    <div className='review-content'>
      <h3>{review.title}</h3>
      <p>{review.content}</p>
    </div>
  </div>
);

export default ReviewForm;
