import React from "react";
import ECharts from "echarts-for-react";


interface WineData {
  Alcohol: number;
  "Malic Acid": number;
  Ash: number;
  "Alcalinity of ash": number;
  Magnesium: number;
  "Total phenols": number;
  Flavanoids: number;
  "Nonflavanoid phenols": number;
  Proanthocyanins: string;
  "Color intensity": number;
  Hue: number;
  "OD280/OD315 of diluted wines": number;
  Unknown: number;
}
interface BarChartProps {
  data: WineData[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const options = {
    title: {
      text: "Wine Data In Bar Graph",
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
      data: data.map((d) => d.Alcohol), //  iterable data which is  receive from the parent component as a  props
    },
    yAxis: {
      name: "Magnesium",
      color: "red",
    },
    series: [
      {
        data: data.map((d) => d.Magnesium),
        type: "bar",
        smooth: true,
      },
      {
        data: data.map((d) => d.Ash),
        type: "bar",
        smooth: true,
      },
      {
        data: data.map((d) => d.Hue),
        type: "bar",
        smooth: true,

      },
    ],
    legend: {
      data: ["Magnesium", "Total phenols", "Flavanoids"],
      textStyle: {
        color: "black",
      },
      // formatter: function (name: string) {
      //   // get color of current series
      //   const color = this.getColor(name);
      //   return `{${color}|${name}}`; // return name with color code
      // },
      tooltip: {
        show: true,
      },
    },
  };

  return <ECharts option={options} />;
};

export default BarChart;
