import { useState } from "react";
import ExpenseInput from "./ExpenseInput";
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    function newExpense(expense) {
        const expenseData = {
            title: expense.title,
            amount: expense.amount,
            date: expense.enteredDate,
            id: Math.random().toString()
         
        }
    
        props.onNewExpenseData(expenseData);
 
    }

    function startEditingHandler() {
        setIsEditing(true);
    }
    function stopEditingHandler() {
        setIsEditing(false);
    }

    return (
        <div  className="expense">
            {!isEditing &&  (<button  className="editing-btn" onClick={startEditingHandler}>Add New Expense</button>)}
           
            {isEditing &&
                (<ExpenseInput
                  onCancel ={stopEditingHandler}
                    onNewExpense={newExpense}
                />)}
        </div>

        );
}

export default ExpenseForm;