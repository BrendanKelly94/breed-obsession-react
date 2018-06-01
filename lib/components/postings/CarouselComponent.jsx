import React from 'react';
import Arrow from '../common/Arrow.jsx';
class Carousel extends React.Component {

  constructor(props){
    super(props);
    this.state = {slideIndex: 0};
    this.changeSlide = this.changeSlide.bind(this);
    this.selectSlide = this.selectSlide.bind(this);
  }

  changeSlide = (num) => {
    let prevSlideIndex = this.state.slideIndex;
    let slideNum;
    if(num < 0){
      (this.state.slideIndex === 0)? slideNum = (this.props.pics.length - 1): slideNum = this.state.slideIndex - 1;
    }else{
      slideNum = ((this.state.slideIndex + 1) % (this.props.pics.length));
    }
    this.setState({slideIndex: slideNum},() => {
      document.getElementById(`${prevSlideIndex}`).classList.remove('currentSlide');
      document.getElementById(`indicator-${prevSlideIndex}`).classList.remove('activeIndicator');
      document.getElementById(`${this.state.slideIndex}`).classList.add('currentSlide');
      document.getElementById(`indicator-${this.state.slideIndex}`).classList.add('activeIndicator');

    });
  }

  selectSlide = (num) => {
    let prevSlideIndex = this.state.slideIndex;
    this.setState({slideIndex: num},() => {
      document.getElementById(`${prevSlideIndex}`).classList.remove('currentSlide');
      document.getElementById(`indicator-${prevSlideIndex}`).classList.remove('activeIndicator');
      document.getElementById(`${this.state.slideIndex}`).classList.add('currentSlide');
      document.getElementById(`indicator-${this.state.slideIndex}`).classList.add('activeIndicator');

    });
  }


  render() {
    const { pics } = this.props;

    return (
      <div>
        <ul id = "slides">
          {(pics.length)?
            pics.map((pic, index) => {
              return (
                <li key = {pic.$t}
                  id = {`${index}`}
                  className = {(index === 0)? 'slide currentSlide': 'slide'}
                  style = {{'backgroundImage': `url(${pic.$t})`}}>
                </li>
              );
            }):null
          }
          <div id = "indicator-container">
            {(pics.length)?
              pics.map((pic, index) => {
                return (
                  <div key = {pic.$t + index} className = {(index === 0)?'indicator activeIndicator':'indicator'} id = {`indicator-${index}`} onClick = {() => this.selectSlide(index)}></div>
                );
              }):null

            }
          </div>
          <button id = "carousel-next" onClick = {() => this.changeSlide(1)}>
            <Arrow width = {24} stroke = {'#fff'} strokeWidth = {'1.5px'} isOpen = {true} degree = {-90}/>
          </button>
          <button id = "carousel-prev" onClick = {() => this.changeSlide(-1)}>
            <Arrow width = {24} stroke = {'#fff'} strokeWidth = {'1.5px'} isOpen = {true} degree = {90}/>
          </button>
        </ul>
      </div>
    );
  }
}
export default Carousel;
