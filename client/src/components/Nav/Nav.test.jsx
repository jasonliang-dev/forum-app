import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

describe('Nav', () => {
  it('renders without crashing', () => {
    shallow(
      <Nav>
        <div />
      </Nav>,
    );
  });

  it.skip('accepts children', () => {});
  it.skip('does not crash with no children', () => {});
});
