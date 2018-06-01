import React from 'react';
const Arrow = ({ degree , isOpen , width, strokeWidth, stroke }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      width={width}
      fill="transparent"
      stroke={stroke}
      strokeWidth={strokeWidth}
      transform={isOpen ? `rotate(${degree})` : null}
    >
      <g>
        <path d="M1,6 L10,15 L19,6" />
      </g>
    </svg>
  );
};
export default Arrow;
