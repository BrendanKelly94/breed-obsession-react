import React, {Fragment} from 'react';
import { withRouter } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidCatch(err, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    console.error(err, info);
  }

  handleClick = () => {
    this.props.history.push('/');
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Fragment>
          <h1>Something went wrong.</h1>
          <button className = "btn" onClick = {this.handleClick}>Home</button>
        </Fragment>
      );
    }
    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
