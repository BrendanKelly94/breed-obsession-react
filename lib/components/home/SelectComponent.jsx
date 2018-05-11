import React from 'react';
const SelectComponent = (props) => {

  const { items , callback} = props;

  if(items){
    return (
      <select onChange = {callback}>
        {items.map((item) => {
          return <option key = {item} value = {item}> {item} </option>;
        })}
      </select>
    );
  }else{
    return <div> Loading... </div>;
  }
};
export default SelectComponent;
