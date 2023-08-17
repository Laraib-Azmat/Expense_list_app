import './ChartBar.css';
const ChartBars = (props) => {

    let fillHeight = "0%";
    
    if (props.value > 0) {
        fillHeight = Math.round((props.value / props.maxValue) * 100+10) + "%";
    }

    return (
      
        <div className="chart-bar">
            <div className="bar">
                <div className="bar-fill"  style={{ height: fillHeight }}>
               
                </div>
            </div>
            <label>{ props.label}</label>
        </div>
    );
}

export default ChartBars;