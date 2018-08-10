import React from 'react';

const PostComponent = ({ post , selectPost }) => {

  const postObject = {
    name: post.name,
    status: post.status,
    age: post.age,
    sex: post.sex,
    breed: post.breed,
    city: post.city,
    State: post.state,
    email: post.email,
    phone: post.phone,
    description: post.description,
    pics: post.pics,
    street: post.street,
    zip: post.zip
  };

  return (
    <div className = "container row posts">
      <div className = "img-container col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <span className = "helper"></span>
        <img className = "thumbnail" src={post.thumbnail} alt = "thumbnail"/>
      </div>

      <div className = "col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <div className = "row">
          <p className = "name">{post.name}</p>
        </div>
        <div className = "row details">
          <p> <b>Status:</b> {post.status} </p>
          <p> <b>Age:</b> {post.age} </p>
          <p> <b>Sex:</b> {post.sex} </p>
          <p> <b>Breed:</b> {post.breed} </p>
          <p> <b>Location:</b> {post.city + ', ' + post.state} </p>
          <button className = "btn btn-lg modal-button" onClick = {() => selectPost(postObject)}><p className = "modal-button-text">View</p></button>
        </div>
      </div>
    </div>
  );

};

export default PostComponent;
