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

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filteredYear} onFilterChange={filterChangeHandler} />
            {filteredExpenses.length === 0 && <p>No Expenses found.</p>}
            {filteredExpenses.length > 0 && filteredExpenses.map(expense =>
                <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
            )}
        </Card>
    );

};

export default Expenses;
