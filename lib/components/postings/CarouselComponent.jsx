import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
const CarouselComponent = ({ pics }) => {
  const slides = pics.map((pic) => {
    return {
      src: pic['$t'],
    };
  });
  return (
    <UncontrolledCarousel items = {slides} autoPlay = {false} />
  );
};
export default CarouselComponent;
