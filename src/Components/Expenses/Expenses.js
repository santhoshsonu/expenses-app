import React, { useState } from 'react';

import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../UI/Card";

import './Expenses.css';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState(2022);

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    };

    const filteredExpenses = props.items.filter(expense =>
        expense.date.getFullYear().toString() === filteredYear);

    let expensesContent = <p>No Expenses found.</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense =>
            <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
        );
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filteredYear} onFilterChange={filterChangeHandler} />
            {expensesContent}
        </Card>
    );

};

export default Expenses;
