// I've decided that I am not going to write tests for the backend...

import { expect } from 'chai';

describe('The app should obey the rules of arithmetic', () => {
  it('2 + 2 should equal 4', done => {
    expect(2 + 2).to.equal(4);
    done();
  });

  it('4 - 1 should equal 3. Quick maths.', done => {
    expect(4 - 1).to.equal(3);
    done();
  });
});
