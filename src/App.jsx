import React, { useState, useEffect } from 'react';
import { Div1 } from './components/Div1/Div1';
import { Div2 } from './components/Div2/Div2';

const emptyValues = {
  bill: 0,
  tip: 0,
  people: 1,
};

const emptyTotals = {
  totalTip: 0,
  totalAmount: 0,
};

export function App() {
  const [values, setValues] = useState(emptyValues);
  const [totals, setTotals] = useState(emptyTotals);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const reset = () => {
    setTotals(emptyTotals);
    setValues(emptyValues);
    setError('');
  };

  useEffect(() => {
    const { bill, tip, people } = values;
    if (people <= 0) {
      setError('cannot be zero');
      setTotals(emptyTotals);
    } else {
      setError('');
      if (bill > 0 && tip > 0 && people > 0) {
        const totalTip = (parseFloat(bill) * (parseFloat(tip) / 100)) / parseInt(people);
        const totalAmount = (parseFloat(bill) / parseInt(people)) + totalTip;
        setTotals({ totalTip, totalAmount });
      }
    }
  }, [values]);

  return (
    <>
      <header><img src="./images/logo.svg" alt="logo" /></header>
      <div className="general-wrapper">
        <Div1 values={values} handleInputChange={handleInputChange} error={error} />
        <Div2 
          totals={totals} 
          reset={reset} 
          isEmpty={values.bill === emptyValues.bill && values.tip === emptyValues.tip && values.people === emptyValues.people} 
        />
      </div>
    </>
  );
}
