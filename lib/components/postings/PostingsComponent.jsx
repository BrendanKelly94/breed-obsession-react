import React from 'react';
import PostComponent from './PostComponent.jsx';
import ModalComponent from './ModalComponent.jsx';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import Loading from '../common/Loading.jsx';



class PostingsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { viewportWidth: document.documentElement.clientWidth };
    this.resizeCallback = this.resizeCallback.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.resizeCallback);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeCallback);
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

  resizeCallback(){
    this.setState({
      viewportWidth: document.documentElement.clientWidth
    });
  }

  render() {

    const {
      back, forward, selectPost, closeModal, isModalOpen,  offset, postings, selectedPost,
      animal, breed, State, city, sex,
      size, age
    } = this.props;

    const { viewportWidth } = this.state;

    let modalStyles = {
      content : {
        position: 'absolute',
        top: '40px',
        left: '5%',
        right: '5%',
        bottom: '40px',
        border: '1px solid rgb(204, 204, 204)',
        background: 'rgb(255, 255, 255)',
        overflow: 'auto',
        outline: 'none',
        padding: '20px',
        height: 'fit-content',
      }
    };

    if(viewportWidth >= 1200){
      modalStyles = {
        content : {
          position: 'absolute',
          top: '40px',
          left: '12%',
          right: '12%',
          bottom: '40px',
          border: '1px solid rgb(204, 204, 204)',
          background: 'rgb(255, 255, 255)',
          overflow: 'auto',
          outline: 'none',
          padding: '20px',
        }
      };
    }

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
      ...forwardSearchObject,
      offset: offset - (25 * 2)
    };

    return (
      <div>
        {(postings.length === 0)?
          <Loading isCenter = {true}/>

          :<div className = "container" id = "post-container">

            <Link to = "/">
              <button id = "back" className = "btn"> Home </button>
            </Link>

            {postings.map((post) => {
              return <PostComponent key = {post.id} post = {post} selectPost = {selectPost}/>;
            })
            }

            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              style={modalStyles}
              contentLabel="Postings Modal"
            >
              <ModalComponent selectedPost = {selectedPost} closeModal = {closeModal}/>
            </Modal>


            <div className = "row">
              {(offset - 25 != 0)?
                <div className = "col-lg-6" id = "back-button">
                  <button className = "btn" onClick = {() => back(backSearchObject)}> Back </button>
                </div>
                :null
              }
              <div className = "col-lg-6" id = "next-button">
                <button className = "btn" onClick = {() => forward(forwardSearchObject)}> Next </button>
              </div>
            </div>

            <footer>
              <div className = "container">
                <p>Powered by Petfinder <a href = "https:www.petfinder.com">www.petfinder.com</a></p>
              </div>
            </footer>
          </div>
        }
      </div>
    );
  }
}


export default PostingsComponent;
