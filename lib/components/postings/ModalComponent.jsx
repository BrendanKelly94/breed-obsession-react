import React from 'react';

const ModalComponent = ({ selectedPost, closeModal}) => {

  return (
    <div>
      <div className = "modal-header">
        <h4 className = "modal-title">{selectedPost.name}</h4>
      </div>
      <div className = "modal-body">
        <div className = "row container">

        </div>
        <div className = "row container modal-details">
          <p> <b>Status:</b> {selectedPost.status} </p>
          <p> <b>Age:</b> {selectedPost.age} </p>
          <p> <b>Sex:</b> {selectedPost.sex} </p>
          <p> <b>Breed:</b> {selectedPost.breed} </p>
          <p> <b>Location:</b> {selectedPost.city} , {selectedPost.state} </p>
          <p> <b>Email:</b> {selectedPost.email} </p>
          <p> <b>Phone:</b> {selectedPost.phone} </p>
        </div>

        <div className = "row container">
          {selectedPost.description}
        </div>
      </div>
      <div className = "modal-footer">
        <button type = "button" className = "btn btn-outline-dark" onClick = {() => closeModal()} >Close</button>
      </div>
    </div>
  );
};

export default ModalComponent;
