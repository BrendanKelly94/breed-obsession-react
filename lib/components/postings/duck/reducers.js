import { Types } from './actions';
const INITIAL_STATE = {
  offset: 0,
  requesting: false,
  postings: []
};

const postingsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case Types.UPDATE_OFFSET: {
      const { offset } = action;
      return {
        ...state,
        offset: offset
      };
    }

    case Types.POSTINGS_LOADED: {
      const { postings } = action;
      return {
        ...state,
        postings: postings
      };
    }

    case Types.REQUESTING_JSON: {
      const { flag } = action;
      return {
        ...state,
        requesting: flag
      };
    }

    default: return state;
  }
};

export default postingsReducer;
