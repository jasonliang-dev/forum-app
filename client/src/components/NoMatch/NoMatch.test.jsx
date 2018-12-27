import React from 'react';
import { shallow } from 'enzyme';
import NoMatch from '../NoMatch';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<NoMatch />);
  });
});
