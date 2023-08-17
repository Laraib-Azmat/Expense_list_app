import './ExpenseChart.css'
const ExpenseCharts = (props) => {
 
    function selectHandler(e) {
            props.onSelect(e.target.value);
       
        }
        return (
            <div className="expense-year">
                <label>Select Year</label>
            <select  value={props.selected} className="expense-select" onChange={selectHandler}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    );
    
}

export default ExpenseCharts;