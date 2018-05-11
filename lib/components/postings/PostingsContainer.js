import { connect } from 'react-redux';
import PostingsComponent from './PostingsComponent.jsx';
import { postingsOperations } from './duck';

const mapStateToProps = (state) => {
  const { offset, postings } = state.postings;
  const { animal, breed, State, city, sex, size, age} = state.home;

  return {offset, postings, animal, breed, State, city, sex, size, age };
};

const mapDispatchToProps = (dispatch) => {
  const back = (searchObject) => dispatch(postingsOperations.fetchPostings(searchObject));
  const forward = (searchObject) => dispatch(postingsOperations.fetchPostings(searchObject));
  return {
    back,
    forward
  };
};

const PostingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostingsComponent);

export default PostingsContainer;
