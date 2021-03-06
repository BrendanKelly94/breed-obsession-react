import { connect } from 'react-redux';
import PostingsComponent from './PostingsComponent.jsx';
import { postingsOperations } from './duck';

const mapStateToProps = (state) => {
  const { offset, postings, isModalOpen, isError } = state.postings;
  const { animal, breed, State, city, sex, size, age} = state.home;

  return {offset, postings, isModalOpen, isError, animal, breed, State, city, sex, size, age };
};

const mapDispatchToProps = (dispatch) => {
  const back = (searchObject) => dispatch(postingsOperations.fetchPostings(searchObject));
  const forward = (searchObject) => dispatch(postingsOperations.fetchPostings(searchObject));

  const selectPost = (postObject, postBox) => {
    document.body.style.overflowY = 'hidden';
    dispatch(postingsOperations.selectPost(postObject, postBox));
  };

  const closeModal = () => {
    document.body.style.overflowY = 'scroll';
    dispatch(postingsOperations.closeModal());
  };

  return {
    back,
    forward,
    selectPost,
    closeModal
  };
};

const PostingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostingsComponent);

export default PostingsContainer;
