import React from 'react';
import SelectComponent from './SelectComponent.jsx';
import { Link } from 'react-router-dom';

const HomeComponent = ({
  breeds,
  cities,
  setBreed,
  setCity,
  setSex,
  setSize,
  setAge,
  fetchCities,
  fetchBreeds
}) => {
  const animals = ['barnyard', 'bird', 'cat', 'dog' , 'horse', 'reptile', 'smallfurry'];

  const states = [
    'Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado',
    'Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia',
    'Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine',
    'Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana',
    'Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota',
    'Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island',
    'South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington',
    'West Virginia','Wisconsin','Wyoming'
  ];

  return (
    <div>
      <SelectComponent items = {animals} callback = {fetchBreeds} />
      <SelectComponent items = {breeds} callback = {setBreed} />
      <SelectComponent items = {states} callback = {fetchCities} />
      <SelectComponent items = {cities} callback = {setCity} />
      <SelectComponent items = {['M', 'F']} callback = {setSex} />
      <SelectComponent items = {['Baby', 'Young Adult', 'Senior']} callback = {setAge} />
      <SelectComponent items = {['S', 'M', 'L', 'XL']} callback = {setSize} />
      <Link to = "/postings">
        <button> Search </button>
      </Link>

    </div>
  );
};

export default HomeComponent;
