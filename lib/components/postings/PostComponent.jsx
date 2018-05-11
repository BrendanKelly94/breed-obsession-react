import React from 'react';
const PostComponent = (props) => {

  const { post } = props;

  return (
    <div>
      <img src={post.thumbnail} alt = "thumbnail"/>
    </div>
  );

};

export default PostComponent;
