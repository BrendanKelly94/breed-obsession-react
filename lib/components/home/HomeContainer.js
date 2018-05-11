import { connect } from 'react-redux';
import HomeComponent from './HomeComponent.jsx';
import { homeOperations } from './duck';

const mapStateToProps = (state) => {
  const {breeds, cities} = state.home;

  return {breeds, cities};
};

const mapDispatchToProps = (dispatch) => {
  const setBreed = (e) => dispatch(homeOperations.breedSelect(e.target.value));
  const setCity = (e) => dispatch(homeOperations.citySelect(e.target.value));
  const setSex = (e) => dispatch(homeOperations.sexSelect(e.target.value));
  const setSize = (e) => dispatch(homeOperations.sizeSelect(e.target.value));
  const setAge = (e) => dispatch(homeOperations.ageSelect(e.target.value));
  const fetchBreeds = (e) => dispatch(homeOperations.fetchBreeds(e.target.value));
  const fetchCities = (e) => dispatch(homeOperations.fetchCities(e.target.value));

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
