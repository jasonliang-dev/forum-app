import React from 'react';
import { Field } from 'redux-form';
import MaterialTextField from '@material-ui/core/TextField';

const CustomTextField = ({ input, ...rest }) => (
  <MaterialTextField {...input} {...rest} />
);

const TextField = ({ ...rest }) => (
  <Field component={CustomTextField} {...rest} />
);

export default TextField;
