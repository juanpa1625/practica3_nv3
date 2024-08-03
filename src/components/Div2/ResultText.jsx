import React from 'react';

const resultData = [
  { label: 'Tip Amount', subLabel: '/ person', key: 'totalTip' },
  { label: 'Total', subLabel: '/ person', key: 'totalAmount' },
];

const ResultText = ({ totals }) => {
  return (
    <div className="result-txt">
      {resultData.map((data) => (
        <div className={`text-amount ${data.key}`} key={data.key}>
          <div>
            <h2>{data.label}</h2>
            <p>{data.subLabel}</p>
          </div>
          <h3>$<span>{totals[data.key]}</span></h3>
        </div>
      ))}
    </div>
  );
};

export default ResultText;
