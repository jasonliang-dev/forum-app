import {
  GET_THREADS_REQUEST,
  GET_THREADS_SUCCESS,
  GET_THREADS_FAILURE,
} from './HomeActions';

const initialState = {
  threads: [],
  isLoading: false,
  errorOccurred: false,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_THREADS_REQUEST:
      return { ...state, isLoading: true };
    case GET_THREADS_SUCCESS:
      return {
        threads: action.payload,
        isLoading: false,
        errorOccurred: false,
      };
    case GET_THREADS_FAILURE:
      return { ...state, isLoading: false, errorOccurred: true };
    default:
      return state;
  }
};

export default homeReducer;
