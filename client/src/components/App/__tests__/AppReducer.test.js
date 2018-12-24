import appReducer from '../AppReducer';
import { INCREMENT, DECREMENT } from '../AppActions';

describe('App Reducer', () => {
  it('should return the initial state', () => {
    expect(appReducer(undefined, {})).toEqual(0);
  });

  it(`should handle ${INCREMENT}`, () => {
    expect(appReducer(0, { type: INCREMENT })).toEqual(1);
  });

  it(`should handle ${DECREMENT}`, () => {
    expect(appReducer(0, { type: DECREMENT })).toEqual(-1);
  });
});
