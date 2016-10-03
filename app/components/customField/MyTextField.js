import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

export const MyTextField = ({ input, label, meta: { touched, error }, ...custom }) =>
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />;

MyTextField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object
};
