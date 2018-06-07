import React, {Fragment} from 'react';
import CarouselComponent from './CarouselComponent.jsx';

const ModalComponent = ({ selectedPost, closeModal}) => {

  return (
    <Fragment>
      <div className = "modal-header">
        <h4 className = "modal-title">{selectedPost.name}</h4>
        <button type = "button" className = "header-button btn btn-outline-dark" onClick = {() => closeModal()} >
          <span>×</span>
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
        <button type = "button" className = "btn btn-outline-dark" onClick = {() => closeModal()} >Close</button>
      </div>
    </Fragment>
  );
};

export default ModalComponent;
