import React, { Component } from "react";
import { Row } from "antd";
import ReactEcharts from "echarts-for-react";
import mount from "../store/mount";
const getOption = () => {
  return {
    title: {
      text: "parch",
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
        data: ["0", "1", "2", "3", "4-"],
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
        data: [521, 110, 68, 5, 10],
        itemStyle: { color: "#3ba272", opacity: 0.86 },
      },
      {
        name: "survival rate",
        type: "line",
        yAxisIndex: 1,
        data: [186 / 521, 61 / 110, 39 / 68, 3 / 5, 1 / 10],
        itemStyle: { color: "#ee6666" },
      },
    ],
  };
};
class Parch extends Component {
  render() {
    let borderr = mount.state.count === 6 ? "2px solid grey" : "0px";
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

export default Parch;
