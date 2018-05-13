import React from 'react';
import PostComponent from './PostComponent.jsx';
import ModalComponent from './ModalComponent.jsx';
import Modal from 'react-modal';


class PostingsComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount() {
    this.props.forward({
      offset: this.props.offset,
      animal: this.props.animal,
      breed: this.props.breed,
      State: this.props.State,
      city: this.props.city,
      sex: this.props.sex,
      size: this.props.size,
      age: this.props.age
    });
  }

  render() {

    const {
      back, forward, selectPost, closeModal, isModalOpen,  offset, postings, selectedPost,
      animal, breed, State, city, sex,
      size, age } = this.props;

    let forwardSearchObject = {
      offset: offset,
      animal: animal,
      breed: breed,
      State: State,
      city: city,
      sex: sex,
      size: size,
      age: age
    };

    let backSearchObject = {
      offset: offset - (25 * 2),
      animal: animal,
      breed: breed,
      State: State,
      city: city,
      sex: sex,
      size: size,
      age: age
    };

    return (
      <div>

        {postings.map((post) => {
          return <PostComponent key = {post.id} post = {post} selectPost = {selectPost}/>;
        })
        }

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Postings Modal"
        >
          <ModalComponent selectedPost = {selectedPost} closeModal = {closeModal}/>
        </Modal>

        {(offset - 25 != 0)?
          <button onClick = {() => back(backSearchObject)}> Back </button>
          :null
        }

        <button  onClick = {() => forward(forwardSearchObject)}> Next </button>


      </div>
    );
  }
}

export default PostingsComponent;
