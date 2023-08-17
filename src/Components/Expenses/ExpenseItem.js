import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    return (
        <li className="expense-item">
          <ExpenseDate date={props.date} />
            <h2>{ props.title}</h2>
            <div className="expense-amount">${ props.amount}</div>
        </li>
    ); 
}

export default ExpenseItem;