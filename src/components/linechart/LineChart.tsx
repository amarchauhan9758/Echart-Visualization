import React from "react";
import ECharts from "echarts-for-react";

interface ScatterChartProps {
  flavanoids: Number[];
  ash: Number[];
}

function LineChart({ ash, flavanoids }: ScatterChartProps) {
  const options = {
    title: {
      text: "Wine Data In Line Chart",
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      name: "Flavanoids",
      data: flavanoids, // it is  receive from the parent component as a  props
    },
    yAxis: {
      name: "Ash",
    },
    series: [
      {
        type: "line", // chart type  which is optional  type , we change  type bar or line if it's requried
        data: ash, // it is  receive from the parent component as a  props
        smooth: true,
        itemStyle: {
          color: "brown",
        },
      },
    ],
  };

  return (
    <>
      <ECharts option={options} />
    </>
  );
}

export default LineChart;
