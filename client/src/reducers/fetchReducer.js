import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from '../actions/fetchActions';

const initialState = {
  data: undefined,
  isLoading: false,
  errorOccurred: false,
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_SUCCESS:
      return { data: action.payload, isLoading: false, errorOccurred: false };
    case FETCH_FAILURE:
      return { ...state, isLoading: false, errorOccurred: true };
    default:
      return state;
  }
};

export default fetchReducer;
