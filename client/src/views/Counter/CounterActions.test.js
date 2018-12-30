import * as actions from './CounterActions';

describe('Counter Actions', () => {
  it('returns the correct type for increment', () => {
    const { INCREMENT, increment } = actions;
    expect(increment().type).toEqual(INCREMENT);
  });

  it('returns the correct type for decrement', () => {
    const { DECREMENT, decrement } = actions;
    expect(decrement().type).toEqual(DECREMENT);
  });
});
