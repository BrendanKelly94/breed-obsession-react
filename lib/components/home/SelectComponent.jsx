import React from 'react';
const SelectComponent = ({ isRequesting, label, items , callback }) => {

  return (

    <div className = "select-item">
      <div>
        <label>{label}</label>
      </div>
      <div>
        <input list = {label} className = {isRequesting?'loading':''} onChange = {callback}/>
        <datalist id = {label}>
          {items.map((item) => {
            return <option key = {item} value = {item}/>;
          })}
        </datalist>
      </div>
    </div>

  );
};
export default SelectComponent;
