import React, { Component } from "react";
import RightWindow from "./RightWindow";
import Left from "./Left";
import "antd/dist/antd.css";
import { Layout, Row } from "antd";
import "./index.css";
const { Content } = Layout;
class App extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Layout className="site-layout">
          <Content className="site-layout">
            <Row className="site-layout" gutter={10}>
              <Left />
              <RightWindow />
            </Row>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default App;
