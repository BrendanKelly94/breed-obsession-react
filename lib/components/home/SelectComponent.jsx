import React from 'react';
const SelectComponent = ({ isRequesting, label, items , callback }) => {

  return (

    <div className = "select-item">
      <div>
        <label>{label}</label>
      </div>
      <div>
        <select id = {label} onChange = {callback} className = {isRequesting?'loading':''}>
          {items.map((item) => {
            return <option key = {item} value = {item}> {item} </option>;
          })}
        </select>
      </div>
    </div>

  );
};
export default SelectComponent;
