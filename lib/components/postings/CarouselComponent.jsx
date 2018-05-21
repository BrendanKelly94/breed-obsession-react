import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
const CarouselComponent = ({ pics }) => {
  let slides;
  if(pics){
    slides = pics.map((pic) => {
      return {
        src: pic['$t'],
      };
    });
  }
  return (
    <UncontrolledCarousel items = {slides} autoPlay = {false} />
  );
};
export default CarouselComponent;
