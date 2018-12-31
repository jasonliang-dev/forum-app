import fetchReducer from './fetchReducer';

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

describe('Fetch Reducer', () => {
  it('should return the initial state', () => {
    const newState = fetchReducer(undefined, {});
    expect(newState.data).toBe(undefined);
    expect(newState.isLoading).toBe(false);
    expect(newState.errorOccurred).toBe(false);
  });

  it(`should handle ${FETCH_REQUEST}`, () => {
    const action = {
      type: FETCH_REQUEST,
    };
    const newState = fetchReducer(initialState, action);
    expect(newState.isLoading).toBe(true);
  });

  it(`should handle ${FETCH_SUCCESS}`, () => {
    const action = {
      type: FETCH_SUCCESS,
      payload: ['a', 'b', 'c'],
    };
    const newState = fetchReducer(initialState, action);
    expect(newState.data.length).toBe(3);
    expect(newState.data.indexOf('b')).toBe(1);
    expect(newState.isLoading).toBe(false);
    expect(newState.errorOccurred).toBe(false);
  });

  it(`should handle ${FETCH_FAILURE}`, () => {
    const action = {
      type: FETCH_FAILURE,
    };
    const newState = fetchReducer(initialState, action);
    expect(newState.errorOccurred).toBe(true);
  });
});
