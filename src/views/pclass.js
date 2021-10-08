import React, { Component } from "react";
import { Row } from "antd";
import ReactEcharts from "echarts-for-react";
import mount from "../store/mount";
const getOption = () => {
  return {
    title: {
      text: "pclass",
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
    // legend: {
    //   data: ["Survived", "Died"],
    //   top: "17%",
    // },
    // legend: {
    //   orient: "vertical",
    //   left: "5%",
    //   top: "5%",
    // },
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
      data: ["pclass1", "pclass2", "pclass3"],
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
        data: [122, 83, 85],
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
        data: [64, 90, 270],
        itemStyle: { color: "#5470c6" },
      },
    ],
  };
};
class Pclass extends Component {
  render() {
    let borderr = mount.state.count === 2 ? "2px solid grey" : "0px";
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

export default Pclass;
