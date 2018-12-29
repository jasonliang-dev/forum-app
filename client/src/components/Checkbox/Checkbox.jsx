import React from 'react';
import { Field } from 'redux-form';
import MaterialCheckbox from '@material-ui/core/Checkbox';

const CustomCheckbox = ({ input: { value, onChange }, ...rest }) => (
  <MaterialCheckbox checked={value} onChange={onChange} {...rest} />
);

const Checkbox = ({ ...rest }) => (
  <Field component={CustomCheckbox} {...rest} />
);

export default Checkbox;
