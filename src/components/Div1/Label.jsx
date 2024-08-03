import React from 'react';
import Input from './Input';

const Label = ({ inputProps }) => {
  return (
    <label htmlFor={inputProps.id}>
      <Input {...inputProps} />
    </label>
  );
};

export default Label;
