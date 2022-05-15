import React from 'react';
import { useState } from 'react';

import './ExpenseForm.css';

const initialState = {
    title: '',
    amount: '',
    date: ''
};

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState(initialState);

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => ({
            ...prevState,
            title: event.target.value
        }));
    };

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => ({
            ...prevState,
            amount: event.target.value
        }));
    };

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => ({
            ...prevState,
            date: event.target.value
        }));
    };

    const submitHandler = (event) => {
        // Prevent default form request 
        // which results in page-reload
        event.preventDefault();
        const newExpense = { ...userInput };
        props.onSaveExpenseData(newExpense);
        resetHandler();
    };

    const resetHandler = () => {
        setUserInput(initialState);
        props.onReset();
    };

    return (
        <form onSubmit={submitHandler} onReset={resetHandler} hidden={!props.visible}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' name='title' value={userInput.title} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' name='amount' min='0.01' step='0.01' value={userInput.amount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' name='date' min='2019-01-01' max='2023-01-01' value={userInput.date} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='reset'>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
