import React from 'react';
import { Field } from 'redux-form';
import Input from '@material-ui/core/Input';

const CustomInput = ({ input, ...rest }) => <Input {...input} {...rest} />;

const InputField = ({ ...rest }) => <Field component={CustomInput} {...rest} />;

export default InputField;
