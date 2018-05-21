import { connect } from 'react-redux';
import PostingsComponent from './PostingsComponent.jsx';
import { postingsOperations } from './duck';

const mapStateToProps = (state) => {
  const { offset, postings, selectedPost, isModalOpen } = state.postings;
  const { animal, breed, State, city, sex, size, age} = state.home;

  return {offset, postings, selectedPost, isModalOpen, animal, breed, State, city, sex, size, age };
};

const mapDispatchToProps = (dispatch) => {
  const back = (searchObject) => dispatch(postingsOperations.fetchPostings(searchObject));
  const forward = (searchObject) => dispatch(postingsOperations.fetchPostings(searchObject));

  const selectPost = (postObject) => {
    document.body.style.overflowY = 'hidden';
    dispatch(postingsOperations.selectPost(postObject));
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
