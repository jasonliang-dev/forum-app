import fetchReducer from './fetchReducer';

import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from '../actions/fetchActions';

describe('Fetch Reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      serving: '',
    };
    const newState = fetchReducer(undefined, {});
    expect(newState).toEqual(expectedState);
  });

  it(`should handle ${FETCH_REQUEST}`, () => {
    const previousState = {
      serving: '',
    };
    const action = {
      type: FETCH_REQUEST,
      payload: 'my-page',
    };
    const expectedState = {
      serving: 'my-page',
      'my-page': {
        isLoading: true,
        errorOccurred: false,
      },
    };
    const newState = fetchReducer(previousState, action);
    expect(newState).toEqual(expectedState);
  });

  it(`should handle ${FETCH_SUCCESS}`, () => {
    const previousState = {
      serving: 'my-page',
      'my-page': {
        isLoading: true,
        errorOccurred: false,
      },
    };
    const action = {
      type: FETCH_SUCCESS,
      payload: ['a', 'b', 'c'],
    };
    const expectedState = {
      serving: 'my-page',
      'my-page': {
        data: ['a', 'b', 'c'],
        isLoading: false,
        errorOccurred: false,
      },
    };
    const newState = fetchReducer(previousState, action);
    expect(newState).toEqual(expectedState);
  });

  it(`should handle ${FETCH_FAILURE}`, () => {
    const previousState = {
      serving: 'my-page',
      'my-page': {
        isLoading: true,
        errorOccurred: false,
      },
    };
    const action = {
      type: FETCH_FAILURE,
      payload: 'pretend this is an error object',
    };
    const expectedState = {
      serving: 'my-page',
      'my-page': {
        isLoading: false,
        errorOccurred: true,
        error: 'pretend this is an error object',
      },
    };
    const newState = fetchReducer(previousState, action);
    expect(newState).toEqual(expectedState);
  });
});
