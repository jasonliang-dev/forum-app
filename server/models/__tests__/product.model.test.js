import { expect } from 'chai';
import Product from '../product.model';

describe('Product Model', () => {
  it('should require a name', done => {
    const product = new Product();
    product.validate(err => {
      expect(err.errors.name).to.exist;
      done();
    });
  });
});
