import React from "react";
import ECharts from "echarts-for-react";

interface BarChartProps {
  data: Array<{ alcohol: string; magnesium: number }>;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const options = {
    title: {
      text: "Wine Data In Bar Chart",
      textStyle: {
        fontSize: 18, // change font size to suit your needs
        fontWeight: "bold", // change font weight to suit your needs
        textAlign: "center", // center text in mobile view
      },
    },
    tooltip: {
      trigger: "axis",
    },

    xAxis: {
      name: "Alcohol", //  label  shows on the  x-axsis
      data: data.map((d) => d.alcohol), //  iterable data which is  receive from the parent component as a  props
    },
    yAxis: {
      name: "Magnesium",
      color: "red",
    },
    series: [
      {
        data: data.map((d) => d.magnesium), //  iterable data  which is  receive from the parent component as a  props
        type: "scatter", // chart type  which is optional  type , we change  type bar or line if it's requried
        smooth: true,
      },
    ],
  };

  return <ECharts option={options} />;
};

export default BarChart;
