import React, { useState } from 'react';

import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';


const basePrice = 120;
const priceFactor = 10;
const initalExpenses = [
  {
    id: 'e1',
    title: 'New TV',
    amount: (basePrice * Math.random() * priceFactor).toFixed(2),
    date: new Date(2020, 7, 14)
  },
  {
    id: 'e2',
    title: 'Toilet Paper',
    amount: (basePrice * Math.random() * priceFactor).toFixed(2),
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: (basePrice * Math.random() * priceFactor).toFixed(2),
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: (basePrice * Math.random() * priceFactor).toFixed(2),
    date: new Date(2021, 5, 12)
  }
];

const App = () => {

  const [expenses, setExpenses] = useState(initalExpenses);

  const addExpenseHandler = (expense) => {
    expense['id'] = 'e' + (expenses.length + 1);
    setExpenses((prevState) => [expense, ...prevState]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
