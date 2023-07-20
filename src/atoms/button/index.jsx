/*
 * File: Button.jsx
 * Project: OkBoys
 * Created Date: Mon Jul 17 2023 03:09:55
 * Author: Mohammed Parveez
 * ------------------------------------
 *
 * Copyright (c) 2023 All rights reserved by Codelabs
 * ------------------------------------
 */

import React from 'react';
import { string, func, bool } from 'prop-types';

function Button({ name, handleClick, type, disabled }) {
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${!disabled ? 'okbtn' : 'okbtn-disabled'} w-full`}
    >
      {name}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
};

Button.propTypes = {
  name: string.isRequired,
  handleClick: func.isRequired,
  type: string,
  disabled: bool,
};

export default Button;
