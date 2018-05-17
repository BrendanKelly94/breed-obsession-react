import fetchJsonp from 'fetch-jsonp';
import {Creators} from './actions.js';

const citiesLoadedAction = Creators.citiesLoaded;
const breedsLoadedAction = Creators.breedsLoaded;
const requestingBreedsJSONAction = Creators.requestingBreedsJson;
const requestingCitiesJSONAction = Creators.requestingCitiesJson;
const animalSelect = Creators.animalSelect;
const breedSelect = Creators.breedSelect;
const stateSelect = Creators.stateSelect;
const citySelect = Creators.citySelect;
const sexSelect = Creators.sexSelect;
const sizeSelect = Creators.sizeSelect;
const ageSelect = Creators.ageSelect;

const fetchBreeds = (animal) => {

  return async (dispatch) => {
    //TODO: convert data to object
    //dispatch change in animal
    dispatch(animalSelect(animal));
    //dispatch requestingJSON to toggle loader
    dispatch(requestingBreedsJSONAction(true));

    try {
      const keys = await (await fetch('/keys')).json();
      const response = await fetchJsonp(`https://api.petfinder.com/breed.list?key=${keys.petKey}&animal=${animal}&format=json`,{
        jsonpCallbackFunction: 'JSONP_CALLBACK'
      });
      const responseJSON = await response.json();
      let breeds = [];
      responseJSON.petfinder.breeds.breed.map((breed) => {
        breeds.push(breed['$t']);
        return null;
      });
      dispatch(breedsLoadedAction(await breeds));
    }catch(err){
      console.error(err);
    }

  };
};

const fetchCities = (state) => {

  return async (dispatch) => {
    //TODO: convert data to object
    //dispatch change in state
    dispatch(stateSelect(state));
    //dispatch requestingJSON to toggle loader
    dispatch(requestingCitiesJSONAction(true));

    try {
      const keys = await (await fetch('/keys')).json();
      const responseJSON = await (await fetch(`https://andruxnet-world-cities-v1.p.mashape.com/?searchby=state&query=${state}`, {
        headers: {
          'X-Mashape-Key': keys.cityKey,
          'X-Mashape-Host': 'andruxnet-world-cities-v1.p.mashape.com'
        },
      })).json();
      let cities = [];
      if(responseJSON.length){
        responseJSON.map((city) => {
          cities.push(city.city);
          return null;
        });
        dispatch(citiesLoadedAction(cities));
      }
    } catch(err){
      console.error(err);
    }


  };
};


export default {
  animalSelect,
  breedSelect,
  stateSelect,
  citySelect,
  sexSelect,
  sizeSelect,
  ageSelect,
  fetchBreeds,
  fetchCities
};
