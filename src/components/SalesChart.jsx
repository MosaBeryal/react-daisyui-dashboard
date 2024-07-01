import React from "react";
import { Chart } from "react-google-charts";

const SalesChart = () => {
  const data = [
    ["Year", "Offline Orders", "Online Orders"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
    ["2008", 1200, 600],
  ];

  const options = {
    curveType: "function",
    hAxis: {
      title: "Year",
      titleTextStyle: { color: "#333" },
    },
    vAxis: {
      minValue: 0,
    },
    chartArea: {
      width: "80%",
      height: "70%",
    },
    legend: {
      position: "top",
      alignment: "end",
      textStyle: { color: "black" },
    },
    colors: ["#f59232", "#653EFE"],
    pointSize: 5,
    backgroundColor: "#ffffff",
    animation: {
      startup: true,
      duration: 1000,
      easing: "out",
    },
  };

  const chartContainerStyle = {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={chartContainerStyle} className="shadow-md bg-white">
      <div className="ps-10 pt-9 text-black font-bold text-lg">
        Sales and Expenses Overview
      </div>
      <Chart
        chartType="ComboChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default SalesChart;
