import React from 'react';
import Loading from '../common/Loading.jsx';
const SelectComponent = ({ isRequesting, label, items , callback }) => {


  return (

    <div className = "row">
      <div className = "col-sm-4 col-md-4 col-lg-4">
        <label>{label}</label>
      </div>
      <div className = "col-sm-8 col-md-8 col-lg-8">
        {(isRequesting)?
          <Loading isCenter = {false}/>
          :<select onChange = {callback}>
            {items.map((item) => {
              return <option key = {item} value = {item}> {item} </option>;
            })}
          </select>
        }
      </div>
    </div>

  );
};
export default SelectComponent;
