import React, {Fragment} from 'react';
import PostComponent from './PostComponent.jsx';
import ModalContainer from './ModalContainer.js';
import Modal from '@material-ui/core/Modal';
import { Link } from 'react-router-dom';
import Loading from '../common/Loading.jsx';



class PostingsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { viewportWidth: document.documentElement.clientWidth, viewportHeight: document.documentElement.clientHeight };
    this.resizeCallback = this.resizeCallback.bind(this);
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
      viewportWidth: document.documentElement.clientWidth,
      viewportHeight: document.documentElement.clientHeight
    });
  }

  render() {

    const {
      back, forward, selectPost, closeModal, isModalOpen, isError,  offset, postings,
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
        maxHeight: this.state.viewportHeight - (this.state.viewportHeight * .06)
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
          height: 'fit-content',
          maxHeight: this.state.viewportHeight - (this.state.viewportHeight * .06)
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
      offset: (offset > 50)? offset - (25 * 2): 0
    };

    return (
      <Fragment>
        {(postings.length === 0)?
          <Loading isCenter = {true} isError = {isError}/>
          :<div className = "container" id = "post-container">

            <Link to = "/">
              <button id = "back" className = "btn outline-button-white"> Home </button>
            </Link>

            {postings.map((post) => {
              return <PostComponent key = {post.id} post = {post} selectPost = {selectPost}/>;
            })}

            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={isModalOpen}
            >
              <ModalContainer/>
            </Modal>


            <div className = "row navigation-buttons">
              <div className = {(offset - 25 > 0)? 'col-lg-6': 'col-lg-6 invisible'} id = "back-button">
                <button className = "btn outline-button-white" onClick = {() => back(backSearchObject)}> Back </button>
              </div>

              <div className = {(postings.length >= 25)?'col-lg-6' : 'col-lg-6 invisible'} id = "next-button">
                <button className = "btn outline-button-white" onClick = {() => forward(forwardSearchObject)}> Next </button>
              </div>
            </div>

            <footer>
              <div className = "container">
                <p>Powered by Petfinder <a href = "https:www.petfinder.com">www.petfinder.com</a></p>
              </div>
            </footer>
          </div>
        }
      </Fragment>
    );
  }
}


export default PostingsComponent;
