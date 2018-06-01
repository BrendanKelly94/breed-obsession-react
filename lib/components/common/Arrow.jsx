import React from 'react';
const Arrow = ({ degree , isOpen , width, borderWidth, color}) => {
  let finalDegree;
  if(isOpen){
    finalDegree = 225;
  }else{
    finalDegree = degree;
  }
  return (
    <div style = {
      {
        'borderRight': `${borderWidth} solid`,
        'borderBottom': `${borderWidth} solid`,
        'height': `${width}`,
        'width': `${width}`,
        'transform': `rotate(${finalDegree}deg)`,
        'color': `${color}`
      }
    }>
    </div>
  );
};
export default Arrow;
