import threadReducer from './ThreadReducer';
import {
  ADD_REPLY,
  RESET_STATE,
  OPEN_DELETE_DIALOG,
  CLOSE_DELETE_DIALOG,
} from './ThreadActions';

describe('Thread Reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      additionalReplies: [],
      deleteDialogOpenState: false,
    };
    expect(threadReducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${ADD_REPLY}`, () => {
    const initialState = {
      additionalReplies: [],
      deleteDialogOpenState: false,
    };
    const action = {
      type: ADD_REPLY,
      payload: 'some message',
    };
    const expectedState = {
      additionalReplies: ['some message'],
      deleteDialogOpenState: false,
    };
    expect(threadReducer(initialState, action)).toEqual(expectedState);
  });
  it(`should handle ${OPEN_DELETE_DIALOG}`, () => {
    const initialState = {
      additionalReplies: [],
      deleteDialogOpenState: false,
    };
    const action = {
      type: OPEN_DELETE_DIALOG,
    };
    const expectedState = {
      additionalReplies: [],
      deleteDialogOpenState: true,
    };
    expect(threadReducer(initialState, action)).toEqual(expectedState);
  });

  it(`should handle ${CLOSE_DELETE_DIALOG}`, () => {
    const initialState = {
      additionalReplies: [],
      deleteDialogOpenState: true,
    };
    const action = {
      type: CLOSE_DELETE_DIALOG,
    };
    const expectedState = {
      additionalReplies: [],
      deleteDialogOpenState: false,
    };
    expect(threadReducer(initialState, action)).toEqual(expectedState);
  });

  it('should reset the state', () => {
    const initialState = {
      additionalReplies: ['some message'],
      deleteDialogOpenState: true,
    };
    const action = {
      type: RESET_STATE,
    };
    const expectedState = {
      additionalReplies: [],
      deleteDialogOpenState: false,
    };
    expect(threadReducer(initialState, action)).toEqual(expectedState);
  });
});
