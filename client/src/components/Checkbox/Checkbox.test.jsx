import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renders without crashing', () => {
    shallow(<Checkbox />);
  });
});
