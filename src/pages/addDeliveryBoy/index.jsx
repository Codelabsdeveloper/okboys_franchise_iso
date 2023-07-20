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

import React , { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardLayout from 'src/layouts/DashboardLayout';
import { useRouter } from 'next/router';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';

const { Option } = Select;
function AddDeliveryBoy() {

  const router = useRouter();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    
    router.push('/listFranchise');
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="+91">+91</Option>
      </Select>
    </Form.Item>
  );

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
 
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <div>
      <DashboardLayout title={"Add Francshie"}>
        <div>
          <p style={{ fontWeight : "bold" , fontSize : "20px" , marginLeft : "30%" }}>Add Delivery Boy</p>

          <div>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '91',
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >

      <Form.Item
        name="deliveryName"
        label="Delivery Boy Name"
        tooltip="What is the name of franchise organisation?"
        rules={[
          {
            required: true,
            message: 'Please input a name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>      

      <Form.Item
        name="Operating Location"
        label="Operating Location"
        tooltip="Operating Location ?"
        rules={[
          {
            required: true,
            message: 'Please input his operating location.',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="PAN Number"
        label="PAN Number"
        tooltip="PAN Number ?"
        rules={[
          {
            required: true,
            message: 'Please input PAN Number!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Comments"
        label="Comments"
        rules={[
          {
            required: true,
            message: 'Any Comments',
          },
        ]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>
 
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" style={{ color : "#fff" , backgroundColor : "orangered" }}>
          Register
        </Button>
      </Form.Item>
    </Form>

</div>
          
        </div>
      </DashboardLayout>
    </div>
  );
}

export default AddDeliveryBoy;
