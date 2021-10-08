import React, { Component } from "react";
import { Col } from "antd";
import Survive from "../views/survive";
import Sex from "../views/sex";
import Pclass from "../views/pclass";
import Embark from "../views/embark";
class Col1 extends Component {
  render() {
    return (
      <Col
        span={11}
        style={{
          width: "100%",
        }}
      >
        <Survive />
        <Sex />
        <Pclass />
        <Embark />
      </Col>
    );
  }
}

export default Col1;
