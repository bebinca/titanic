import React, { Component } from "react";
import { Row } from "antd";
import ReactEcharts from "echarts-for-react";
import mount from "../store/mount";
const getOption = () => {
  return {
    title: {
      text: "survive",
      left: "center",
      top: "18%",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      //orient: "vertical",
      left: "center",
      top: "0%",
    },

    series: [
      {
        type: "pie",
        radius: "60%",
        top: "20%",
        label: {
          color: "black",
        },
        data: [
          {
            value: 290 / 714,
            name: "survived",
            itemStyle: { color: "#91cc75" },
          },
          {
            value: 424 / 714,
            name: " died",
            itemStyle: { color: "#5470c6" },
          },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
};
class Survive extends Component {
  render() {
    let borderr = mount.state.count === 0 ? "2px solid grey" : "0px";
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

export default Survive;
