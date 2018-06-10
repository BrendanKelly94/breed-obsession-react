import { connect } from 'react-redux';
import HomeComponent from './HomeComponent.jsx';
import { homeOperations } from './duck';

const mapStateToProps = (state) => {
  const { breeds, cities, requestingBreeds, requestingCities } = state.home;

  return { breeds, cities, requestingBreeds, requestingCities };
};

const mapDispatchToProps = (dispatch) => {
  const setBreed = (value) => dispatch(homeOperations.breedSelect(value));
  const setCity = (value) => dispatch(homeOperations.citySelect(value));
  const setSex = (value) => dispatch(homeOperations.sexSelect(value));
  const setSize = (value) => dispatch(homeOperations.sizeSelect(value));
  const setAge = (value) => dispatch(homeOperations.ageSelect(value));
  const fetchBreeds = (value) => dispatch(homeOperations.fetchBreeds(value.toLowerCase()));
  const fetchCities = (value) => dispatch(homeOperations.fetchCities(value));

  return {
    setBreed,
    setCity,
    setSex,
    setSize,
    setAge,
    fetchBreeds,
    fetchCities
  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;
