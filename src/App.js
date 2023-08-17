import ExpenseList from "./Components/Expenses/ExpenseList";
import ExpenseForm from "./Components/Form/ExpenseForm";
import { useState } from "react";

const dummy_Expenses = [
  {
    title: "rose",
    amount: "50",
    date: new Date(2019, 8, 14),
    id:"e1"
  },
  {
    title: "chocolate",
    amount: "100",
    date: new Date(2019, 9, 3),
    id: "e2"
  }
]


function App() {
  const [expenses, setExpense] = useState(dummy_Expenses);

  const newExpenseHandler = (expense) => {
   setExpense((prevExpense) => {
     return [expense, ...prevExpense]
   });

  }
  
  return (
    <>
      
      <ExpenseForm onNewExpenseData = {newExpenseHandler} />
      <ExpenseList items={expenses } />
    </>
 );
}

export default App;
