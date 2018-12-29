import homeReducer from './HomeReducer';
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

describe('Home Reducer', () => {
  it('should return the initial state', () => {
    const newState = homeReducer(undefined, {});
    expect(newState.threads.length).toBe(0);
    expect(newState.isLoading).toBe(false);
    expect(newState.errorOccurred).toBe(false);
  });

  it(`should handle ${GET_THREADS_REQUEST}`, () => {
    const action = {
      type: GET_THREADS_REQUEST,
    };
    const newState = homeReducer(initialState, action);
    expect(newState.isLoading).toBe(true);
  });

  it(`should handle ${GET_THREADS_SUCCESS}`, () => {
    const action = {
      type: GET_THREADS_SUCCESS,
      payload: ['a', 'b', 'c'],
    };
    const newState = homeReducer(initialState, action);
    expect(newState.threads.length).toBe(3);
    expect(newState.threads.indexOf('b')).toBe(1);
    expect(newState.isLoading).toBe(false);
    expect(newState.errorOccurred).toBe(false);
  });

  it(`should handle ${GET_THREADS_FAILURE}`, () => {
    const action = {
      type: GET_THREADS_FAILURE,
    };
    const newState = homeReducer(initialState, action);
    expect(newState.errorOccurred).toBe(true);
  });
});
