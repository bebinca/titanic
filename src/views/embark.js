import React, { Component } from "react";
import { Row } from "antd";
import ReactEcharts from "echarts-for-react";
import mount from "../store/mount";
const getOption = () => {
  return {
    title: {
      text: "embark",
      left: "center",
      top: "10%",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // Use axis to trigger tooltip
        type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: ["S", "C", "Q"],
    },
    series: [
      {
        name: "Survived",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [201, 79, 8],
        itemStyle: { color: "#91cc75" },
      },
      {
        name: "Died",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [353, 51, 20],
        itemStyle: { color: "#5470c6" },
      },
    ],
  };
};
class Embark extends Component {
  render() {
    let borderr = mount.state.count === 4 ? "2px solid grey" : "0px";
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

export default Embark;
