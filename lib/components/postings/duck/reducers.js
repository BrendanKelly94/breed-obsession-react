import { Types } from './actions';
const INITIAL_STATE = {
  offset: 0,
  requesting: false,
  postings: [],
  selectedPost: {},
  selectedBox: {},
  isModalOpen: false,
  isError: false,
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

    case Types.SELECT_POST: {
      const { post } = action;
      return {
        ...state,
        selectedPost: post
      };
    }

    case Types.SELECT_BOX: {
        const { box } = action;
        return{
          ...state,
          selectedBox: box
        }
    }

    case Types.OPEN_MODAL: {
      return {
        ...state,
        isModalOpen: true
      };
    }

    case Types.CLOSE_MODAL: {
      return {
        ...state,
        isModalOpen: false
      };
    }

    case Types.SET_ERROR: {
      return{
        ...state,
        isError: true
      };
    }

    default: return state;
  }
};

export default postingsReducer;
