import React from 'react';
import { shallow } from 'enzyme';
import FormControlLabel from './FormControlLabel';

describe('FormControlLabel', () => {
  it('renders without crashing', () => {
    shallow(<FormControlLabel />);
  });
});
