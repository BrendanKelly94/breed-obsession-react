import React, {Fragment} from 'react';
import CarouselComponent from './CarouselComponent.jsx';

const ModalComponent = ({ selectedPost, closeModal}) => {

  return (
    <Fragment>
      <div className = "modal-header">
        <h4 className = "modal-title">{selectedPost.name}</h4>
        <button type = "button" className = "header-button btn modal-button-close" onClick = {() => closeModal()} >
          <span className = "modal-button-close-text">×</span>
        </button>
      </div>
      <div className = "modal-body">
        <CarouselComponent pics = {selectedPost.pics} />

        <p className = "description">
          {selectedPost.description}
        </p>

        <div className = "row container modal-details">
          <p> <b>Status:</b> {selectedPost.status} </p>
          <p> <b>Age:</b> {selectedPost.age} </p>
          <p> <b>Sex:</b> {selectedPost.sex} </p>
          <p> <b>Breed:</b> {selectedPost.breed} </p>
          <p> <b>Location:</b> {selectedPost.city} , {selectedPost.state} </p>
          <p> <b>Email:</b> {selectedPost.email} </p>
          <p> <b>Phone:</b> {selectedPost.phone} </p>
        </div>

      </div>
      <div className = "modal-footer">
        <button type = "button" className = "btn modal-button-close" onClick = {() => closeModal()} ><p className = "modal-button-close-text">Close</p></button>
      </div>
    </Fragment>
  );
};

export default ModalComponent;
