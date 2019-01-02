import threadReducer from './ThreadReducer';
import { ADD_REPLY, CLEAR_REPLIES } from './ThreadActions';

describe('Thread Reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      additionalReplies: [],
    };
    expect(threadReducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${ADD_REPLY}`, () => {
    const initialState = {
      additionalReplies: [],
    };
    const action = {
      type: ADD_REPLY,
      payload: 'some message',
    };
    const expectedState = {
      additionalReplies: ['some message'],
    };
    expect(threadReducer(initialState, action)).toEqual(expectedState);
  });

  it(`should handle ${CLEAR_REPLIES}`, () => {
    const initialState = {
      additionalReplies: ['some message'],
    };
    const action = {
      type: CLEAR_REPLIES,
    };
    const expectedState = {
      additionalReplies: [],
    };
    expect(threadReducer(initialState, action)).toEqual(expectedState);
  });
});
