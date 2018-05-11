import React from 'react';
import PostComponent from './PostComponent.jsx';

class PostingsComponent extends React.Component {

  constructor(props) {
    super(props);
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
      back, forward, offset, postings,
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
          return <PostComponent key = {post.id} post = {post}/>;
        })
        }

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
