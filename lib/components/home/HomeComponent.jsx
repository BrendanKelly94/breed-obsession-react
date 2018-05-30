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
  fetchBreeds,
  requestingBreeds,
  requestingCities,
}) => {

  const animals = ['Barnyard', 'Bird', 'Cat', 'Dog' , 'Horse', 'Reptile', 'Smallfurry'];

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
    <div id = "home-component">
      <div className = "row" id = "home-name">
        <h1> Breed Obsession </h1>
      </div>

      <div className = "row" id = "home">
        <SelectComponent isRequesting = {false} label = "Animal" items = {animals} callback = {fetchBreeds} />
        <SelectComponent isRequesting = {requestingBreeds} label = "Breed" items = {breeds} callback = {setBreed} />
        <SelectComponent isRequesting = {false} label = "State" items = {states} callback = {fetchCities} />
        <SelectComponent isRequesting = {requestingCities} label = "City" items = {cities} callback = {setCity} />

        <div className = "row"  id = "advanced-toggle">
          <button data-toggle = "collapse" data-target = "#advanced" aria-expanded = "false" aria-controls = "advanced">
            Advanced Search
          </button>
        </div>

        <div className = "collapse" id = "advanced">
          <SelectComponent isRequesting = {false} label = "Sex" items = {['M', 'F']} callback = {setSex} />
          <SelectComponent isRequesting = {false} label = "Age" items = {['Baby', 'Young Adult', 'Senior']} callback = {setAge} />
          <SelectComponent isRequesting = {false} label = "Size" items = {['S', 'M', 'L', 'XL']} callback = {setSize} />
        </div>

      </div>

      <div className = "row" id = "search">
        <Link to = "/postings">
          <button className = "btn btn-primary"> Go </button>
        </Link>
      </div>

      <footer>
        <div className = "container">
          <p>Powered by Petfinder <a href = "https:www.petfinder.com">www.petfinder.com</a></p>
        </div>
      </footer>
    </div>
  );
};

export default HomeComponent;
