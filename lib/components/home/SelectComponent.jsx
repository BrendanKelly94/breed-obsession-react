import React from 'react';
import Downshift from 'downshift';

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
              <svg
                viewBox="0 0 20 20"
                preserveAspectRatio="none"
                width={16}
                fill="transparent"
                stroke="#979797"
                strokeWidth="1.1px"
                transform={isOpen ? 'rotate(180)' : null}
              >
                <path d="M1,6 L10,15 L19,6" />
              </svg>
            </button>
            {isOpen ? (
              <div className = 'downshift-dropdown'>
                {items
                  .filter((i) => !inputValue || i.includes(inputValue))
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
