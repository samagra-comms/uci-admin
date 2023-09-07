import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import useWindowSize from "../../hooks/useWindow";

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const PieChart = ({ data }) => {
  const chartRef = useRef(null);
  const { height } = useWindowSize();

  useEffect(() => {
    const dynamicColors = data?.labels?.map(() => generateRandomColor());

    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: data?.labels,
        datasets: [
          {
            data: data?.datasets[0].data,
            backgroundColor: dynamicColors,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = data?.labels[context.dataIndex];
                const value = data?.datasets[0].data[context.dataIndex];
                const total = data?.datasets[0].data.reduce((acc, curr) => acc + curr);
                const percentage = ((value / total) * 100).toFixed(2);
                return `${label}: ${value} (${percentage}%)`;
              },
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  const chartContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: `${height - 100}px`,
  };

  return (
    <div style={chartContainerStyle}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default PieChart;
