import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

class Loading extends React.Component {

  render() {
    const {isError} = this.props;
    return (
      <Fragment>
        {(isError)?
          <Link to = "/">
            <button className = "btn btn-primary centered outline-button-white"> No Results! </button>
          </Link>
          :<div>
            <div className = "spinner"></div>
          </div>
        }
      </Fragment>
    );
  }
}
export default Loading;
