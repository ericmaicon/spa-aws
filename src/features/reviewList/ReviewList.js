import React from 'react';
import { compose, lifecycle, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import ReviewListForm from './components/ReviewListForm';
import { fetchReviews } from 'features/review/review';

const mapStateToProps = (state) => {
  return {
    groupedReviews: state.review.groupedReviews,
    hasMore: state.review.hasMore,
    page: state.review.page
  };
};

const mapDispatchToProps = {
  fetchReviews
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleOnScroll: ({ fetchReviews, hasMore, page }) => () => {
      var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
      var clientHeight = document.documentElement.clientHeight || window.innerHeight;
      var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if (scrolledToBottom && hasMore) {
        fetchReviews(page+1);
      }
    }
  }),
  lifecycle({
    componentDidMount: function componentDidMount() {
      const { fetchReviews, handleOnScroll } = this.props;
      fetchReviews();

      window.addEventListener('scroll', handleOnScroll);
    },
    componentWillUnmount: function() {
      const { handleOnScroll } = this.props;
      window.removeEventListener('scroll', handleOnScroll);
    },
  })
)(ReviewListForm);
