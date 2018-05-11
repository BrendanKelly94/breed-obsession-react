import { Types } from './actions';
const INITIAL_STATE = {
  animal: '',
  breed: '',
  State: '',
  city: '',
  sex: '',
  size: '',
  age: '',
  breeds: [],
  cities: [],
  requesting: false
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case Types.ANIMAL_SELECT: {
      const { animal } = action;
      return {
        ...state,
        animal: animal
      };
    }

    case Types.BREED_SELECT: {
      const { breed } = action;
      return {
        ...state,
        breed: breed
      };
    }

    case Types.STATE_SELECT: {
      const { State } = action;
      return {
        ...state,
        State: State
      };
    }

    case Types.CITY_SELECT: {
      const { city } = action;
      return {
        ...state,
        city: city
      };
    }

    case Types.SEX_SELECT: {
      const { sex } = action;
      return {
        ...state,
        sex: sex
      };
    }

    case Types.AGE_SELECT: {
      const { age } = action;
      return {
        ...state,
        age: age
      };
    }

    case Types.SIZE_SELECT: {
      const { size } = action;
      return {
        ...state,
        size: size
      };
    }

    case Types.REQUESTING_JSON: {
      const { flag } = action;
      return {
        ...state,
        requesting: flag
      };
    }

    case Types.BREEDS_LOADED: {
      const { breeds } = action;
      return {
        ...state,
        breeds: breeds,
        requesting: false
      };
    }

    case Types.CITIES_LOADED: {
      const { cities } = action;
      return {
        ...state,
        cities: cities,
        requesting: false
      };
    }

    default: return state;
  }
};

export default homeReducer;
