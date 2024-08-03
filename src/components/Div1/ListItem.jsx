import React from 'react';

const ListItem = ({ id, buttonProps }) => {
  const { type, ...restProps } = buttonProps;

  return (
    <li id={id}>
      {type === 'button' ? (
        <button {...restProps}>
          {restProps.children}
        </button>
      ) : (
        <input type="number" {...restProps} />
      )}
    </li>
  );
};

export default ListItem;
