import React from 'react';
import './ResetButton.css'; 

const ResetButton = ({ reset, isEmpty }) => {
  const buttonClass = isEmpty ? 'reset-button default' : 'reset-button changed';

  return (
    <button type="button" id="reset-button" className={buttonClass} onClick={reset}>
      RESET
    </button>
  );
};

export default ResetButton;
