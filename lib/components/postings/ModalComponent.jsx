import React, {Fragment} from 'react';
import CarouselComponent from './CarouselComponent.jsx';
import CircleEffect from './CircleEffect.js';
import { Scrollbars } from 'react-custom-scrollbars';


class ModalComponent extends React.Component{

  constructor(props){
    super(props);
    this.content = React.createRef();

    this.containerStyle = {
      opacity: 0,
      backgroundColor: '#fff',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      transition: 'all 1s ease',
      zIndex: 1000,
    }

    this.closeButton = {
      position: 'absolute',
      right: '1em',
      top: '1em',
      zIndex: '1'
    }

  }



  componentDidMount(){
    this.content.current.style.opacity = 1;
  }

  render(){
    const { selectedBox, selectedPost, closeModal } = this.props;
  return (
    <CircleEffect box = {selectedBox}>
        <div ref = {this.content} style = {this.containerStyle}>
            <svg width = "25" height = "25" style = {this.closeButton} onClick = {closeModal}>
              <line x1="1" y1="21"
            x2="21" y2="1"
            stroke="black"
            stroke-width="2"/>
      <line x1="1" y1="1"
            x2="21" y2="21"
            stroke="black"
            stroke-width="2"/>
            </svg>
            <Scrollbars>
            <div style = {{display: 'flex', flexDirection: 'column', width: '100%', backgroundColor: '#5c42f4'}}>
              <h4 style = {{color: '#fff', textAlign: 'center', marginTop: '1em'}}>{selectedPost.name}</h4>
              <div className = "modal-carousel-details">
                <CarouselComponent pics = {selectedPost.pics} />
                <div className = "modal-details">
                  <div> <b>Status:</b> {selectedPost.status} </div>
                  <div> <b>Age:</b> {selectedPost.age} </div>
                  <div> <b>Sex:</b> {selectedPost.sex} </div>
                  <div> <b>Breed:</b> {selectedPost.breed} </div>
                  <div> <b>Location:</b> {selectedPost.city} , {selectedPost.state} </div>
                  <div> <b>Email:</b> {selectedPost.email} </div>
                  <div> <b>Phone:</b> {selectedPost.phone} </div>
                </div>

              </div>
            </div>

              <p className = "description">
                {selectedPost.description}
              </p>
            </Scrollbars>
        </div>
    </CircleEffect>

  );
}
};

export default ModalComponent;
