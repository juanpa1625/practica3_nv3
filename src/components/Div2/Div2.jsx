import React from 'react';
import ResultText from './ResultText';
import ResetButton from './ResetButton';

export const Div2 = ({ totals, reset, isEmpty }) => {
  return (
    <div className="result-wrapper">
      <ResultText totals={totals} />
      <ResetButton reset={reset} isEmpty={isEmpty} />
    </div>
  );
};
