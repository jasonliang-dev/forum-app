import counterReducer from './CounterReducer';
import { INCREMENT, DECREMENT } from './CounterActions';

describe('Counter Reducer', () => {
  it('should return the initial state', () => {
    expect(counterReducer(undefined, {})).toEqual(0);
  });

  it(`should handle ${INCREMENT}`, () => {
    expect(counterReducer(0, { type: INCREMENT })).toEqual(1);
  });

  it(`should handle ${DECREMENT}`, () => {
    expect(counterReducer(0, { type: DECREMENT })).toEqual(-1);
  });
});
