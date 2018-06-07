import { connect } from 'react-redux';
import ModalComponent from './ModalComponent.jsx';
import { postingsOperations } from './duck';

const mapStateToProps = (state) => {
  const { selectedPost, isModalOpen } = state.postings;
  return {selectedPost, isModalOpen};
};

const mapDispatchToProps = (dispatch) => {
  const closeModal = () => {
    document.body.style.overflowY = 'scroll';
    dispatch(postingsOperations.closeModal());
  };

  return {
    closeModal
  };
};

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalComponent);

export default ModalContainer;
