import React from 'react';
import ListItem from './ListItem';

const tipValues = [5, 10, 15, 25, 50];

const Ul = ({ values, handleInputChange }) => {
  return (
    <ul>
      {tipValues.map((tipValue) => (
        <ListItem
          key={tipValue}
          id={`percentage-${tipValue}`}
          buttonProps={{
            type: 'button',
            className: `percentage-button ${values.tip === tipValue ? 'active' : ''}`,
            value: tipValue,
            onClick: () => handleInputChange({ target: { name: 'tip', value: tipValue } }),
            children: `${tipValue}%`,
          }}
        />
      ))}
      <ListItem
        buttonProps={{
          type: 'number',
          className: 'percentage-button',
          placeholder: 'Custom',
          id: 'custom-percentage-button',
          name: 'tip',
          value: values.tip || '', 
          onChange: handleInputChange,
        }}
      />
    </ul>
  );
};

export default Ul;
