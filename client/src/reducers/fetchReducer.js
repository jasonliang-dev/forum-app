import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from '../actions/fetchActions';

const initialState = {
  serving: '',
};

/*
  data: undefined,
  isLoading: false,
  errorOccurred: false,
*/

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        serving: action.payload,
        [action.payload]: { isLoading: true, errorOccurred: false },
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        [state.serving]: {
          data: action.payload,
          isLoading: false,
          errorOccurred: false,
        },
      };
    case FETCH_FAILURE:
      return {
        ...state,
        [state.serving]: {
          isLoading: false,
          errorOccurred: true,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default fetchReducer;
