import React, { Component } from "react";
import { Row } from "antd";
import ReactEcharts from "echarts-for-react";
import mount from "../store/mount";
const getOption = () => {
  return {
    title: {
      text: "fare",
      left: "center",
      top: "18%",
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
    legend: {
      left: "center",
      top: "0%",
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
        data: ["0-50", "50-100", "100-150", "150-200", "200-250", "250-"],
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
        data: [576, 90, 21, 9, 9, 9],
        itemStyle: { color: "#3ba272", opacity: 0.86 },
      },
      {
        name: "survival rate",
        type: "line",
        yAxisIndex: 1,
        itemStyle: { color: "#ee6666" },
        data: [192 / 576, 62 / 90, 16 / 21, 6 / 9, 7 / 9, 7 / 9],
      },
    ],
  };
};
class Fare extends Component {
  render() {
    let borderr = mount.state.count === 3 ? "2px solid grey" : "0px";
    return (
      <Row
        gutter={[10, 10]}
        style={{
          //   paddingTop: 36,
          //   paddingRight: 24,
          //   paddingLeft: 0,
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

export default Fare;
