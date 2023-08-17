import { useState } from 'react';
import './ExpenseInput.css';

const ExpenseInput = (props) => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [enteredDate, setDate] = useState("");

    function titleHandler(e) {
        setTitle(e.target.value);
    }

    function amountHandler(e) {
        setAmount(e.target.value);
    }

    function datehandler(e) {
        setDate(e.target.value);
    }

    function formHandler(e) {
        e.preventDefault();

        if (title === "" && amount === "" && enteredDate === "") {
            alert("Enter some input");
        } else {

            const expense = {
                title, amount, enteredDate: new Date(enteredDate),
            }
            props.onNewExpense(expense);

            setTitle("");
            setAmount("");
            setDate("");
        }
    };
    
    return (
        <form onSubmit={formHandler} className="expense-form">

            <div className='inputDiv'>
            <label>Title: </label>
                <input type="text" value={title} onChange={titleHandler}  />
                </div>
            
            <div className='inputDiv'>
            <label>Amount:</label>
                <input type="number" min="0" step="1" value={amount} onChange={amountHandler}  />
                </div> 

            <div className='inputDiv'>
            <label>Date:</label>
                <input type="date" value={enteredDate}    min='2019-01-01'
            max='2022-12-31' onChange={datehandler}  />
          </div>  
           <div className='add-cancel-btn'>
            <button className="add-expense" type="submit">Add</button>
            <button className="cancel-expense" type='button' onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default ExpenseInput;