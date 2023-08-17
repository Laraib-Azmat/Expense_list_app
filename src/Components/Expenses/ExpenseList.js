import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseCharts from "../Charts/ExpenseCharts";
import './ExpenseList.css';
import ChartLabel from "../Charts/ChartLabel";


const ExpenseList = (props) => {
   
    const [year, setYear] = useState("2019");

        function selectedYear(year) {
            setYear(year);
    }
   
    const filteredExpenses = props.items.filter(item => {
        return item.date.getFullYear().toString() === year;
    });

        return (
        <div className="expense-list">
                <div className="expense-chart">
                <ChartLabel Items={filteredExpenses} />
                <ExpenseCharts  selected={year}  onSelect={selectedYear} />
                </div>
                
                <ul> 
                {filteredExpenses.length===0 &&(<h2 className="noexpense">No expense found</h2>)}    
            {filteredExpenses.map(expense => (
                <ExpenseItem
               key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
                
                
            ))}
        </ul>
        </div>

        );
}

export default ExpenseList;