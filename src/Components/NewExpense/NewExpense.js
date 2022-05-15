import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {

    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (expense) => {
        const expenseData = {
            title: expense.title,
            amount: +expense.amount,
            date: new Date(expense.date)
        };
        props.onAddExpense(expenseData);
    };

    const addNewExpenseHandler = () => {
        setShowForm(true);
    };

    const resetExpenseFormHandler = () => {
        setShowForm(false);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onReset={resetExpenseFormHandler} visible={showForm} />
            <button hidden={showForm} onClick={addNewExpenseHandler}>Add New Expense</button>
        </div>
    );
};

export default NewExpense;
