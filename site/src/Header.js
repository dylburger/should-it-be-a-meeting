import {Col, Layout, Row} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';

const {Header} = Layout;

export default () => (
  <div>
    <Header className="main-header">
      <Row gutter={8} justify="space-between" align="middle">
        <Col xs={{span: 24}}>
          <Link to="/">
            <span className="App-title">Should It Be a Meeting?</span>
          </Link>
        </Col>
      </Row>
    </Header>
  </div>
);
