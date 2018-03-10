import React, { Fragment } from 'react';
import { Row, Col, Avatar } from 'antd';

const ReviewForm = () => (
  <Fragment>
    <h2 className='review-title'>
      DECEMBER
    </h2>
    <div className='review'>
      <div className='review-header'>
        <Avatar shape="square" size="large" icon="user" />
        <div className='review-header-content'>
          <label>Date</label>
          <p>12.12.2017</p>
        </div>
        <div className='review-header-content'>
          <label>Stars</label>
          <p>12.12.2017</p>
        </div>
        <div className='review-header-content'>
          <label>B016MO</label>
          <p>Anker</p>
        </div>
      </div>
      <div className='review-content'>
        <h3>Review Title</h3>
        <p>wqe ew qe wq qweqweqwe ewq ewq ewqe  eqweew q</p>
      </div>
    </div>
  </Fragment>
);

export default ReviewForm;
