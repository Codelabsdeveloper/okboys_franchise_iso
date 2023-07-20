/*
 * File: LoginLayout.jsx
 * Project: OkBoys
 * Created Date: Mon Jul 17 2023 02:31:24
 * Author: Mohammed Parveez
 * ------------------------------------
 *
 * Copyright (c) 2023 All rights reserved by Codelabs
 * ------------------------------------
 */

import React from 'react';
import { node } from 'prop-types';

function LoginLayout({ children }) {
  return (
    <div className="w-full h-[100vh] overflow-hidden flex items-center justify-center">
      {children}
    </div>
  );
}

LoginLayout.propTypes = {
  children: node.isRequired,
};

export default LoginLayout;
