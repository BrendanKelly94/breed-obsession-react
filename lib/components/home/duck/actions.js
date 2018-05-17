import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  breedsLoaded: ['breeds'],
  citiesLoaded: ['cities'],
  requestingBreedsJson: ['flag'],
  requestingCitiesJson: ['flag'],
  animalSelect: ['animal'],
  breedSelect: ['breed'],
  stateSelect: ['State'],
  citySelect: ['city'],
  sexSelect: ['sex'],
  sizeSelect: ['size'],
  ageSelect: ['age']
});

export { Creators, Types };
