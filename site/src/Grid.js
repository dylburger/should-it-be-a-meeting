import React from 'react';
import {Col, Row, Layout} from 'antd';

import Footer from './Footer';
import StartOver from './StartOver';

const {Content} = Layout;

export default ({children}) => (
  <Layout className="layout">
    <Content className="main-body">
      <Row gutter={8} type="flex" justify="space-around" align="middle">
        <Col xs={{span: 24}} md={{span: 18}} lg={{span: 16}}>
          {children}
        </Col>
      </Row>
      <StartOver />
    </Content>
    <Footer />
  </Layout>
);
