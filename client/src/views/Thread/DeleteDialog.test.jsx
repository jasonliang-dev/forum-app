import React from 'react';
import { shallow } from 'enzyme';
import DeleteDialog from './DeleteDialog';

describe('DeleteDialog', () => {
  it('renders without crashing', () => {
    const props = {
      openState: false,
      close: () => {},
      onDelete: () => {},
    };
    shallow(<DeleteDialog {...props} />);
  });
});
