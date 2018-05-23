import React from 'react';
import '../styles/loading.scss';

class Loading extends React.Component {

  render() {
    const { isCenter} = this.props;
    let slider;
    if(isCenter){
      slider = <div style = {{'width': '120px', 'height': '120px', 'top': '50%', 'left': '50%', 'margin-left': 'auto', 'margin-right': 'auto'}} className = 'loader'></div>;
    }else{
      slider = <div style = {{'width': '20px', 'height': '20px', 'top': '-5px', 'left': '4%'}} className = 'loader'></div>;
    }

    return (
      <div>
        {slider}
      </div>
    );
  }
}
export default Loading;
