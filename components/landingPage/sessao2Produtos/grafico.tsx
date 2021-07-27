import React, { useState } from "react";
import Chart from "react-google-charts";

function Grafico() {
  const [optionsBar, setOptionsBar] = useState({
    title: "Company Performance",
  });
  const [dataBar, setDataBar] = useState([
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ]);
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: '30px 0' }}>
      <Chart
        width={"100%"}
        chartType="Bar"
        data={dataBar}
        options={optionsBar}
      />
    </div>
  );
}

export default Grafico;
