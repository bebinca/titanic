import React, { Component } from "react";
import { Row } from "antd";
import ReactEcharts from "echarts-for-react";
import mount from "../store/mount";
const getOption = () => {
  return {
    title: {
      text: "age",
      left: "center",
      top: "10%",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "0-10",
          "10-20",
          "20-30",
          "30-40",
          "40-50",
          "50-60",
          "60-70",
          "70-",
        ],
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        // name: "number of people",
      },
      {
        type: "value",
        max: "1",
        // name: "survival rate",
      },
    ],
    series: [
      {
        name: "number of people",
        type: "bar",
        data: [62, 102, 220, 167, 89, 48, 19, 7],
        itemStyle: { color: "#3ba272", opacity: 0.86 },
      },
      {
        name: "survival rate",
        type: "line",
        yAxisIndex: 1,
        data: [
          38 / 62,
          41 / 102,
          77 / 220,
          73 / 167,
          34 / 89,
          20 / 48,
          6 / 19,
          1 / 7,
        ],
        itemStyle: { color: "#ee6666" },
      },
    ],
  };
};
class Age extends Component {
  render() {
    let borderr = mount.state.count === 5 ? "2px solid grey" : "0px";
    return (
      <Row
        gutter={[10, 10]}
        style={{
          width: "100%",
          border: borderr,
          borderRadius: "10px",
        }}
      >
        <ReactEcharts
          option={getOption()}
          style={{ width: "100%", height: "182px" }}
          theme="light"
        />
      </Row>
    );
  }
}

export default Age;
