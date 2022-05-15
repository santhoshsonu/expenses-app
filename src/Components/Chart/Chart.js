import React from 'react';

import ChartBar from "./ChartBar/ChartBar";

import './Chart.css';


const Chart = (props) => {
    const values = props.dataPoints.map(point => point.value);
    const maximum = Math.max(...values);

    return (
        <div className='chart'>
            {props.dataPoints.map(point =>
                <ChartBar key={point.label} value={point.value} maxValue={maximum} label={point.label} />
            )}
        </div>
    );
};

export default Chart;
