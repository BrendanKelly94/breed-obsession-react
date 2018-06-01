import React from 'react';
import Downshift from 'downshift';
import Arrow from '../common/Arrow.jsx';

class SelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen = (e) => {
    if(e.target.tagName === 'INPUT' && !this.state.isOpen){
      this.setState({isOpen: !this.state.isOpen});
    }else if(e.target.tagName !== 'INPUT'){
      this.setState({isOpen: !this.state.isOpen});
    }
  }


  render() {
    const {isRequesting, label, items , callback } = this.props;


    return (
      <Downshift
        onChange={(selection) => {
          callback(selection);
          this.setState({isOpen: !this.state.isOpen});
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
            <div className = "row">
              <label {...getLabelProps()}>{label}</label>
            </div>
            <input {...getInputProps()} className = {isRequesting?'loading':''} onClick = {this.handleOpen}/>
            <button className = "dropdown-button btn" onClick = {this.handleOpen}>
              <Arrow width = {16} stroke = {'#979797'} strokeWidth = {'1.1px'} isOpen = {isOpen} degree = {180}/>
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
        )}
      />
    );
  }
}
export default SelectComponent;
