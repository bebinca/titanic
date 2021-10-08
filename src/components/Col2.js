import React, { Component } from "react";
import { Col } from "antd";
import Age from "../views/age";
import Sibsp from "../views/sipsp";
import Parch from "../views/parch";
import Fare from "../views/fare";

class Col2 extends Component {
  render() {
    return (
      <Col
        span={11}
        style={{
          width: "100%",
        }}
      >
        <Fare />
        <Age />
        <Sibsp />
        <Parch />
      </Col>
    );
  }
}

export default Col2;
