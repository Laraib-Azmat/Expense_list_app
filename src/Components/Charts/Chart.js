import ChartBars from "./ChartBars";
import './Chart.css';

const Chart = (props) => {
    const maxValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxAmount = Math.max(...maxValue);

    return (
        <div className="chart">
    {props.dataPoints.map(dataPoint => (
 <ChartBars
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxAmount}
            key={dataPoint.label}
        />
    ))}
        </div>
    );
}

export default Chart;