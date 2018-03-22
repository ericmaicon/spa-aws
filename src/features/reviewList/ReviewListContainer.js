import { compose, lifecycle, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { fetchReviews } from 'features/review/review';
import ReviewListForm from './components/ReviewListForm';

const mapStateToProps = (state) => ({
  parsedReviews: state.review.parsedReviews,
  hasMore: state.review.hasMore,
  page: state.review.page
});

const mapDispatchToProps = {
  fetchReviews
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleOnScroll: ({ fetchReviews, hasMore, page }) => () => { // eslint-disable-line no-shadow
      const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if (scrolledToBottom && hasMore) {
        fetchReviews(page+1);
      }
    }
  }),
  lifecycle({
    componentDidMount() {
      const { fetchReviews, handleOnScroll } = this.props; // eslint-disable-line no-shadow
      fetchReviews();

      window.addEventListener('scroll', handleOnScroll);
    },
    componentWillUnmount() {
      const { handleOnScroll } = this.props;
      window.removeEventListener('scroll', handleOnScroll);
    },
  }),
)(ReviewListForm);
