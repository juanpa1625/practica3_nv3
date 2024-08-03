import React from 'react';
import Label from './Label';
import Ul from './Ul';

export const Div1 = ({ values, handleInputChange, error }) => {
  return (
    <div className="data-wrapper">
      <h1>Bill</h1>
      <Label
        inputProps={{
          className: 'input-bill',
          id: 'input-bill',
          name: 'bill',
          value: values.bill,
          min: 0,
          type: 'number',  
          onChange: handleInputChange,
        }}
      />
      <h2>Select Tip %</h2>
      <Ul values={values} handleInputChange={handleInputChange} />
      <h2>Number of People</h2>
      <Label
        inputProps={{
          className: 'input-people',
          id: 'input-people',
          name: 'people',
          value: values.people,
          min: 1,
          type: 'number',  
          onChange: handleInputChange,
        }}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};
