import React from "react";
import { Row, Col, Button, Space } from "antd";
import mount from "../store/mount";

function Choose() {
  return (
    <Row
      className="site-layout"
      style={{
        padding: 12,
        paddingRight: 20,
        width: "100%",
      }}
    >
      <Col
        span={24}
        className="site-layout-background"
        style={{
          padding: 12,
          width: "100%",
        }}
      >
        <Row
          style={{
            paddingLeft: 5,
          }}
        >
          <Col span={19} style={{ paddingLeft: 20 }}>
            <div
              style={{
                "font-size": 17,
                "font-weight": "bold",
                color: "RGB(50,50,50)",
              }}
            >
              <span role="img" aria-label="titanic">
                🚢 Exploring Survival on the Titanic
              </span>
            </div>
          </Col>
          <Col span={5}>
            <Space size="large">
              <Button
                size="small"
                type="primary"
                onClick={() => mount.handleChange.add()}
              >
                add
              </Button>
              <Button
                size="small"
                type="primary"
                onClick={() => mount.handleChange.show()}
              >
                show
              </Button>
              <Button
                size="small"
                type="primary"
                onClick={() => mount.handleChange.clear()}
              >
                clear
              </Button>
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
export default Choose;
