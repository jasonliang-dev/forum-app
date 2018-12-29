import React from 'react';
import { Field } from 'redux-form';
import MaterialFormControlLabel from '@material-ui/core/FormControlLabel';

const CustomFormControlLabel = ({ input: { value, onChange }, ...rest }) => (
  <MaterialFormControlLabel checked={value} onChange={onChange} {...rest} />
);

const FormControlLabel = ({ control, label, ...rest }) => (
  <Field
    component={CustomFormControlLabel}
    control={control}
    label={label}
    {...rest}
  />
);

export default FormControlLabel;
