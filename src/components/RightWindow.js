import React, { Component } from "react";
import { Col, Row } from "antd";
import Col1 from "./Col1";
import Col2 from "./Col2";
import mount from "../store/mount";

class RightWindow extends Component {
  componentDidMount() {
    mount.registerComponent("RightWindow", this);
  }
  componentWillUnmount() {
    mount.unregisterComponent("RightWindow", this);
  }
  render() {
    return (
      <Col
        span={9}
        className="site-layout"
        style={{
          paddingTop: 36,
          paddingRight: 36,
          paddingLeft: 0,
          width: "100%",
        }}
      >
        <Row
          className="site-layout-background"
          style={{
            height: "100%",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 15,
          }}
        >
          <Col1 />
          <Col span={2}></Col>
          <Col2 />
        </Row>
      </Col>
    );
  }
}

export default RightWindow;
