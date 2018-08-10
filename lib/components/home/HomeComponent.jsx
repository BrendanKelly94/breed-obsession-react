import React, {Fragment} from 'react';
import SelectComponent from './SelectComponent.jsx';
import { Link } from 'react-router-dom';

class HomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAnimalSelected: false,
      isBreedSelected: false,
      isStateSelected: false,
      isError: true ,
      animalError:false,
      breedError: false,
      stateError: false
    };
    this.animals = ['Barnyard', 'Bird', 'Cat', 'Dog' , 'Horse', 'Reptile', 'Smallfurry'];
    this.states = [
      'Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado',
      'Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia',
      'Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine',
      'Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana',
      'Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota',
      'Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island',
      'South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington',
      'West Virginia','Wisconsin','Wyoming'
    ];
    this.animalSelect = this.animalSelect.bind(this);
    this.breedSelect = this.breedSelect.bind(this);
    this.stateSelect = this.stateSelect.bind(this);
    this.handleError = this.handleError.bind(this);
    this.checkError = this.checkError.bind(this);
  }

  animalSelect(){
    this.setState({isAnimalSelected:true},() => {
      this.checkError();
    });
  }

  breedSelect(){
    this.setState({isBreedSelected:true}, () => {
      this.checkError();
    });
  }

  stateSelect(){
    this.setState({isStateSelected:true},() => {
      this.checkError();
    });
  }

  handleError(){
    if(!this.state.isAnimalSelected){
      this.setState({animalError: true});
    }
    if(!this.state.isBreedSelected){
      this.setState({breedError: true});
    }
    if(!this.state.isStateSelected){
      this.setState({stateError: true});
    }
  }

  checkError(){
    if(this.state.isAnimalSelected && this.state.isBreedSelected && this.state.isStateSelected){
      this.setState({isError:false});
    }
  }

  render() {

    const {
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
    } = this.props;

    const {isError, animalError, breedError, stateError} = this.state;

    return (
      <Fragment>
        <div className = "row" id = "home-name">
          <h1> Breed Obsession </h1>
        </div>

        <div className = "row" id = "home">
          <SelectComponent isError = {animalError} isRequesting = {false} label = "Animal" items = {this.animals} callback = {fetchBreeds} selectCallback = {this.animalSelect} />
          <SelectComponent isError = {breedError} isRequesting = {requestingBreeds} label = "Breed" items = {breeds} callback = {setBreed} selectCallback = {this.breedSelect}/>
          <SelectComponent isError = {stateError} isRequesting = {false} label = "State" items = {this.states} callback = {fetchCities} selectCallback = {this.stateSelect}/>
          <SelectComponent isError = {false} isRequesting = {requestingCities} label = "City" items = {cities} callback = {setCity} selectCallback = {() => {}}/>

          <div className = "row"  id = "advanced-toggle">
            <button data-toggle = "collapse" data-target = "#advanced" aria-expanded = "false" aria-controls = "advanced">
              Advanced Search
            </button>
          </div>

          <div className = "collapse" id = "advanced">
            <SelectComponent isError = {false} isRequesting = {false} label = "Sex" items = {['M', 'F']} callback = {setSex} selectCallback = {() => {}} />
            <SelectComponent isError = {false} isRequesting = {false} label = "Age" items = {['Baby', 'Young Adult', 'Senior']} callback = {setAge} selectCallback = {() => {}} />
            <SelectComponent isError = {false} isRequesting = {false} label = "Size" items = {['S', 'M', 'L', 'XL']} callback = {setSize} selectCallback = {() => {}} />
          </div>

        </div>

        <div className = "row" id = "search">
          {!isError?
            <Link to = "/postings">
              <button className = "btn btn-primary"> Go </button>
            </Link>
            :<button className = "btn disabled" onClick = {this.handleError} > Go </button>
          }
        </div>

        <footer id = "home-foot">
          <div className = "container">
            <p>Powered by Petfinder <a href = "https:www.petfinder.com">www.petfinder.com</a></p>
          </div>
        </footer>
      </Fragment>
    );
  }
}
export default HomeComponent;
