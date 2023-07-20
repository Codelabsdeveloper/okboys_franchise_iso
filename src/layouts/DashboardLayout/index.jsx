/*
 * File: DashboardLayout.jsx
 * Project: okBoys
 * Created Date: Mon Jul 17 2023 14:40:56
 * Author: Mohammed Parveez
 * ------------------------------------
 *
 * Copyright (c) 2023 All rights reserved by Codelabs
 * ------------------------------------
 */

import React from 'react';
import {Layout} from 'antd';
import {any} from 'prop-types';
import SideBar from './SideBar';
import TopBar from './TopBar';
import Breadcrumbs from './Breadcrumb';
import PageTitle from './Title';

const {Content} = Layout;

const DashboardLayout = ({children }) => {
  // console.log("props" , ...props)
  return (
    <Layout style={{minHeight: '100vh'}}>
      <TopBar />
      <Layout style={{marginTop: 64}}>
        <SideBar />
        <Layout style={{marginLeft: 200, padding: '0 24px 24px'}}>
          {/* <Breadcrumbs /> */}
          {/* <PageTitle title={props.title}/> {props.title} */}
          <Content className="p-6 m-0 min-h-[280px] overflow-auto bg-white">{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

DashboardLayout.propTypes = {
  children: any.isRequired,
};

export default DashboardLayout;
