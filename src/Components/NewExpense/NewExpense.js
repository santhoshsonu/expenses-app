import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
    const saveExpenseDataHandler = (expense) => {
        const expenseData = {
            title: expense.title,
            amount: expense.amount,
            date: new Date(expense.date)
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
