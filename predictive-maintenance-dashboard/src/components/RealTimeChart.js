import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register required components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const RealTimeChart = ({ data}) => {
    const chartData = {
        labels: data.timestamps, // x-axis labels
        datasets: [
            {
                label: 'Sensor Data',
                data: data.values, // y-axis labels
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Real-Time Sensor Data',
            },
        },
        scales: {
            x: {
                type: 'category', // x-axis scale type
            },
            y: {
                type: 'linear', // y-axis scale type
            },
        },
    };

    return <Line data={chartData} options={chartOptions} />;
}

export default RealTimeChart;