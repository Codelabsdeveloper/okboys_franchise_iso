/*
 * File: Dashboard.jsx
 * Project: OkBoys
 * Created Date: Mon Jul 17 2023 14:40:05
 * Author: Mohammed Parveez
 * ------------------------------------
 *
 * Copyright (c) 2023 All rights reserved by Codelabs
 * ------------------------------------
 */

import React from 'react';
import DashboardLayout from 'src/layouts/DashboardLayout';
import { Segmented, Space } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import ReactECharts from 'echarts-for-react';

function Dashboard() {

  const handleTimeChange = (value) => {
    console.log("Value", value)
  }

  const option = {
    title: {
      text: 'Franchise Orders Tracking'
    },
    tooltip: {},
    legend: {
      data: ['AAAAAAAAAA']
    },
    xAxis: {
      data: ['Franchise 1', 'Franchise 2', 'Franchise 3', 'Franchise 4', 'Franchise 5', 'Franchise 6','Franchise 7', 'Franchise 8', 'Franchise 9']
    },
    yAxis: {},
    series: [{
      name: 'Total orders',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20,11,33,22,44]
    }]
  };

  return (
    <div>
      <DashboardLayout>
        <div>
          <Space direction="vertical">
            <Segmented
              size="large"
              onChange={handleTimeChange}
              options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
          </Space>
        </div>
        <br/>
        <div className='w-50'>
          <Row gutter={16}>
            <Col span={12}>
              <Card bordered={true}>
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{
                    color: '#3f8600',
                  }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card bordered={true}>
                <Statistic
                  title="Idle"
                  value={9.3}
                  precision={2}
                  valueStyle={{
                    color: '#cf1322',
                  }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
          <br/>
          <Row>
            
            <ReactECharts
              option={option}
              style={{ height: 400 , width : 700}}
              opts={{ renderer: 'svg' }}
            />
          </Row>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default Dashboard;
