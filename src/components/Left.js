import React, { Component } from "react";
import { Col, Row } from "antd";
import Choose from "./Choose";
import mount from "../store/mount";
import * as echarts from "echarts";
class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: mount.getData.getSangji().nodes,
      links: mount.getData.getSangji().links,
    };
    this.changeData = this.changeData.bind(this);
    this.changelinks = this.changelinks.bind(this);
    this.update = this.update.bind(this);
  }
  changeData(newdata) {
    this.setState({
      data: newdata,
    });
  }
  changelinks(newdata) {
    this.setState({
      links: newdata,
    });
  }
  initChart(count) {
    var pointChart = echarts.init(document.getElementById("point"), "light");
    var relateChart = echarts.init(document.getElementById("relate"));
    var allChart = echarts.init(document.getElementById("all"), "light");
    pointChart.setOption({
      grid: {
        bottom: "15%",
        top: "10%",
        left: "15%",
        right: "15%",
      },
      tooltip: {},
      animationDurationUpdate: 1500,
      animationEasingUpdate: "quinticInOut",
      series: [
        {
          type: "graph",
          layout: "none",
          symbolSize: 50,
          roam: true,
          edgeSymbol: ["circle", "arrow"],
          edgeSymbolSize: [4, 10],
          edgeLabel: {
            fontSize: 20,
          },
          categories: [
            { name: "0", symbolSize: 30 },
            { name: "1", symbolSize: 30 },
            { name: "2", symbolSize: 30 },
            { name: "3", symbolSize: 30 },
            { name: "4", symbolSize: 30 },
            { name: "5", symbolSize: 30 },
            { name: "6", symbolSize: 30 },
            { name: "7", symbolSize: 30 },
          ],
          label: {
            show: true,
            position: "left",
            formatter: "{b}",
            color: "black",
          },
          data: [
            {
              name: "survive",
              x: 0,
              y: 0,
              category: 0,
              value: 1,
            },
            {
              name: "sex",
              x: -5,
              y: -23,
              category: 1,
              value: -0.54,
            },
            {
              name: "pclass",
              x: 10,
              y: 27,
              category: 2,
              value: -0.36,
            },
            {
              name: "fare",
              x: 40,
              y: 25,
              category: 3,
              value: 0.27,
            },
            {
              name: "embark",
              x: -50,
              y: -20,
              category: 4,
              value: -0.18,
            },
            {
              name: "age",
              x: -58,
              y: 25,
              category: 5,
              value: -0.1,
            },
            {
              name: "parch",
              x: -25,
              y: 65,
              category: 6,
              value: 0.09,
            },
            {
              name: "sibsp",
              x: 73,
              y: -50,
              category: 7,
              value: -0.02,
            },
          ],
          // links: [],
          links: [
            {
              source: 0,
              target: 1,
            },
            {
              source: 0,
              target: 2,
            },
            {
              source: 0,
              target: 3,
            },
            {
              source: 0,
              target: 4,
            },
            {
              source: 0,
              target: 5,
            },
            {
              source: 0,
              target: 6,
            },
            {
              source: 0,
              target: 7,
            },
          ],

          lineStyle: {
            opacity: 0.6,
            color: "target",
          },
          emphasis: {
            focus: "adjacency",
            lineStyle: {
              width: 10,
            },
          },
        },
      ],
    });
    var y = ["survive", "pclass", "sex", "age", "sibsp", "parch", "fare"];
    var x = ["embark", "fare", "parch", "sibsp", "age", "sex", "pclass"];

    var data = [
      [0, 0, -0.18],
      [0, 1, 0.28],
      [0, 2, 0.07],
      [0, 3, -0.02],
      [0, 4, 0.06],
      [0, 5, 0.0005],
      [0, 6, -0.28],
      [0, 7, 0],
      [1, 0, 0.27],
      [1, 1, -0.55],
      [1, 2, -0.18],
      [1, 3, 0.06],
      [1, 4, 0.14],
      [1, 5, 0.21],
      [1, 6, 0],
      [1, 7, 0],
      [2, 0, 0.09],
      [2, 1, 0.03],
      [2, 2, -0.24],
      [2, 3, -0.22],
      [2, 4, 0.38],
      [2, 5, 0],
      [2, 6, 0],
      [2, 7, 0],
      [3, 0, -0.02],
      [3, 1, 0.07],
      [3, 2, -0.1],
      [3, 3, -0.34],
      [3, 4, 0],
      [3, 5, 0],
      [3, 6, 0],
      [3, 7, 0],
      [4, 0, -0.1],
      [4, 1, -0.3],
      [4, 2, 0.1],
      [4, 3, 0],
      [4, 4, 0],
      [4, 5, 0],
      [4, 6, 0],
      [4, 7, 0],
      [5, 0, -0.54],
      [5, 1, 0.16],
      [5, 2, 0],
      [5, 3, 0],
      [5, 4, 0],
      [5, 5, 0],
      [5, 6, 0],
      [5, 7, 0],
      [6, 0, -0.36],
      [6, 1, 0],
      [6, 2, 0],
      [6, 3, 0],
      [6, 4, 0],
      [6, 5, 0],
      [6, 6, 0],
      [6, 7, 0],
    ];
    data = data.map(function (item) {
      return [item[0], item[1], item[2] || "-"];
    });
    relateChart.setOption({
      tooltip: {
        position: "top",
      },
      grid: {
        bottom: "15%",
        top: "10%",
        left: "12%",
        right: "9%",
      },
      xAxis: {
        type: "category",
        data: x,
        splitArea: {
          show: true,
        },
      },
      yAxis: {
        type: "category",
        data: y,
        splitArea: {
          show: false,
        },
      },
      visualMap: {
        precision: 2,
        show: true,
        min: -0.65,
        max: 0.55,
        calculable: true,
        orient: "vertical",
        right: "4%",
        bottom: "33%",
        inRange: {
          color: [
            "#313695",
            "#4575b4",
            "#74add1",
            "#abd9e9",
            "#e0f3f8",
            "#ffffbf",
            "#fee090",
            "#fdae61",
            "#f46d43",
            "#d73027",
            "#a50026",
          ],
        },
      },
      series: [
        {
          type: "heatmap",
          data: data,
          label: {
            show: true,
            color: "black",
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 20,
              shadowColor: "rgba(0, 0, 0, 1)",
            },
          },
        },
      ],
    });
    console.log("i m here");
    allChart.setOption({
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove",
      },
      grid: {
        bottom: "0%",
        right: "0%",
      },

      series: [
        {
          type: "sankey",
          data: this.state ? this.state.data : [],
          links: this.state ? this.state.links : [],
          right: "2%",
          left: "6%",
          nodeGap: 8,
          nodeWidth: 18,
          emphasis: {
            focus: "adjacency",
          },
          itemStyle: {
            borderWidth: 0,
          },
          levels: [
            {
              depth: 0,
              itemStyle: {
                color: "RGB(55,162,218)",
              },
            },
            {
              depth: 1,
              itemStyle: {
                color: "rgb(50,197,233)",
              },
            },
            {
              depth: 2,
              itemStyle: {
                color: "rgb(103,224,227)",
              },
            },
            {
              depth: 3,
              itemStyle: {
                color: "rgb(174,253,202)",
              },
            },
            {
              depth: 4,
              itemStyle: {
                color: "rgb(255,219,92)",
              },
            },
            {
              depth: 5,
              itemStyle: {
                color: "rgb(255,159,127)",
              },
            },
            {
              depth: 6,
              itemStyle: {
                color: "rgb(251,114,147)",
              },
            },
            {
              depth: 7,
              itemStyle: {
                color: "rgb(224,98,174)",
              },
            },
          ],
          label: {
            position: "left",
          },
          lineStyle: {
            color: "source",
            curveness: 0.4,
            opacity: 0.3,
          },
        },
      ],
    });
    if (count >= 0 && count <= 7) {
      pointChart.dispatchAction({
        type: "downplay",
        name: [
          mount.state.data[0],
          mount.state.data[1],
          mount.state.data[2],
          mount.state.data[3],
          mount.state.data[4],
          mount.state.data[5],
          mount.state.data[6],
          mount.state.data[7],
        ],
      });
      relateChart.dispatchAction({
        type: "highlight",
        name: mount.state.data[count],
      });
      pointChart.dispatchAction({
        type: "highlight",
        name: mount.state.data[count],
      });
    } else {
      relateChart.dispatchAction({
        type: "downplay",
        name: [
          mount.state.data[0],
          mount.state.data[1],
          mount.state.data[2],
          mount.state.data[3],
          mount.state.data[4],
          mount.state.data[5],
          mount.state.data[6],
          mount.state.data[7],
        ],
      });
      pointChart.dispatchAction({
        type: "downplay",
        name: [
          mount.state.data[0],
          mount.state.data[1],
          mount.state.data[2],
          mount.state.data[3],
          mount.state.data[4],
          mount.state.data[5],
          mount.state.data[6],
          mount.state.data[7],
        ],
      });
    }
    pointChart.on("mousemove", function (params) {
      relateChart.dispatchAction({
        type: "highlight",
        name: params.name,
      });
    });
    pointChart.on("mousemove", function (params) {
      relateChart.dispatchAction({
        type: "showTip",
        name: params.name,
      });
    });
    pointChart.on("mouseout", function (params) {
      relateChart.dispatchAction({
        type: "downplay",
        name: params.name,
      });
    });
    relateChart.on("mousemove", function (params) {
      pointChart.dispatchAction({
        type: "highlight",
        name: params.name,
      });
    });
    relateChart.on("mouseout", function (params) {
      pointChart.dispatchAction({
        type: "downplay",
        name: params.name,
      });
    });
    relateChart.on("mousemove", function (params) {
      pointChart.dispatchAction({
        type: "showTip",
        name: params.name,
      });
    });
    allChart.on("mousemove", function (params) {
      if (mount.state.map[params.name]) {
        relateChart.dispatchAction({
          type: "highlight",
          name: mount.state.data[mount.state.map[params.name]],
        });
        pointChart.dispatchAction({
          type: "highlight",
          name: mount.state.data[mount.state.map[params.name]],
        });
      }
    });
    allChart.on("mouseout", function (params) {
      relateChart.dispatchAction({
        type: "downplay",
        name: mount.state.data[mount.state.map[params.name]],
      });
      pointChart.dispatchAction({
        type: "downplay",
        name: mount.state.data[mount.state.map[params.name]],
      });
    });
  }
  update() {
    console.log("update");
    console.log(this.state);
    let newData = mount.getData.getSangji()["nodes"];
    let newLink = mount.getData.getSangji()["links"];
    let count = mount.state.count;
    this.setState({
      data: newData,
      links: newLink,
    });
    // eslint-disable-next-line
    this.state.data = newData;
    // eslint-disable-next-line
    this.state.links = newLink;
    this.initChart(count);
  }
  componentDidMount() {
    mount.registerComponent("Left", this);
    this.initChart();
  }
  componentWillUnmount() {
    mount.unregisterComponent("Left", this);
  }
  render() {
    return (
      <Col
        span={15}
        className="site-layout"
        style={{
          paddingTop: 24,
          paddingLeft: 24,
          width: "100%",
        }}
      >
        <Choose />
        <Row
          className="site-layout"
          style={{
            padding: 12,
            paddingRight: 20,
            width: "100%",
          }}
        >
          <Col
            id="point"
            span={11}
            className="site-layout-background"
            style={{
              paddingRight: 0,
              width: "100%",
              height: "270px",
            }}
          ></Col>
          <Col className="site-layout" span={1}></Col>
          <Col
            id="relate"
            span={12}
            className="site-layout-background"
            style={{
              paddingRight: 0,
              width: "100%",
              borderRadius: "2px",
              height: "270px",
            }}
          ></Col>
        </Row>
        <Row
          className="site-layout"
          style={{
            padding: 12,
            paddingRight: 19,
            paddingBottom: 0,
            width: "100%",
            borderRadius: "2px",
          }}
        >
          <Col
            id="all"
            span={24}
            className="site-layout-background"
            style={{ borderRadius: "2px", height: "380px" }}
          ></Col>
        </Row>
      </Col>
    );
  }
}

export default Left;
