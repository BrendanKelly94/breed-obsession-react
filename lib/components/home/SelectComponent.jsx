import React from 'react';
import Downshift from 'downshift';
import Arrow from '../common/Arrow.jsx';

class SelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, isFocused: false, isSelected: false };
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen = (e) => {
    if(e.target.tagName === 'INPUT' && !this.state.isOpen){
      this.setState({isOpen: !this.state.isOpen, isFocused: !this.state.isFocused});
    }else if(e.target.tagName !== 'INPUT'){
      this.setState({isOpen: !this.state.isOpen, isFocused: !this.state.isFocused});
    }
  }


  render() {
    const { isError, isRequesting, label, items , callback, selectCallback } = this.props;
    const { isFocused, isSelected } = this.state;

    let labelClass= '';
    if(isSelected){
      labelClass = 'label-slide';
    }else if(isFocused){
      labelClass = 'label-slide';
    }


    return (
      <Downshift
        onChange={(selection) => {
          callback(selection);
          this.setState({isOpen: !this.state.isOpen, isSelected: true});
          selectCallback();
        }
        }
        {...this.state}
        render={({
          getInputProps,
          getItemProps,
          getLabelProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => (
          <div>
            <div className = {isError?'row combobox-div error':'row combobox-div'}>
              <label className = {labelClass} {...getLabelProps()}>{label}</label>
              <input {...getInputProps()} htmlFor= 'text' onClick = {this.handleOpen}/>
              <button className = {isRequesting?'dropdown-button btn loading':'dropdown-button btn'} onClick = {this.handleOpen}>
                {!isRequesting &&
                  <Arrow width = {'10px'} color = {'#979797'} borderWidth = {'2px'} isOpen = {isOpen} degree = {45} isLoading = {isRequesting}/>
                }
              </button>
              {isOpen ? (
                <div className = 'downshift-dropdown'>
                  {items
                    .filter((i) => !inputValue || i.toLowerCase().includes(inputValue.toLowerCase()))
                    .map((item, index) => (
                      <div key = {item}
                        {...getItemProps({
                          key: item,
                          index,
                          item,
                          style: {
                            backgroundColor: highlightedIndex === index
                              ? '#61dafb'
                              : 'transparent',
                            fontWeight: selectedItem === item
                              ? 'bold'
                              : 'normal',
                          },
                        })}
                      >
                        {item}
                      </div>
                    ))}
                </div>

              ) : null}
            </div>
          </div>
        )}
      />
    );
  }
}
export default SelectComponent;
