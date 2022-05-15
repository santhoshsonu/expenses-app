import React, { useState } from 'react';

import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";

import './Expenses.css';
import ExpensesList from './ExpensesList/ExpensesList';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState(2022);

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    };

    const filteredExpenses = props.items.filter(expense =>
        expense.date.getFullYear().toString() === filteredYear);

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filteredYear} onFilterChange={filterChangeHandler} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );

};

export default Expenses;
