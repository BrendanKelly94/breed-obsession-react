import React from 'react';
import ReactDOM from "react-dom";


class CircleEffect extends React.Component {
  constructor(props) {
    super(props);
    this.circleRef = React.createRef();
    this.circleContainerRef = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <svg
          width="100%"
          height="100%"
          ref={this.circleContainerRef}
          style={{ position: "absolute" }}
        >
          <circle
            ref={this.circleRef}
            r="1"
            cx={`${this.props.box.x + this.props.box.width / 2}`}
            cy={`${this.props.box.y + this.props.box.height / 2}`}
            fill="#fff"
            style={{
              transformOrigin: "center"
            }}
          >
            <animate
              attributeName="r"
              begin="0s"
              dur="0.5s"
              from="1"
              to={Math.max(window.innerWidth, window.innerHeight)}
              fill = 'freeze'
            />
          </circle>
        </svg>
      </React.Fragment>
    );
  }
}

export default CircleEffect;
