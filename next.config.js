/*
 * File: next.config.js
 * Project: OkBoys
 * Created Date: Mon Jul 17 2023 02:30:35
 * Author: Mohammed Parveez
 * ------------------------------------
 *
 * Copyright (c) 2023 All rights reserved by Codelabs
 * ------------------------------------
 */

var customConfig = require('./webpack.custom.js');
var rewriteMapping = require('./rewrite.config.js');
const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');

// Detect build environment
const env = process.env.NODE_ENV;
const isDev = env !== 'production';

const urlRewrites = {
  async rewrites() {
    return [...rewriteMapping[env], ...rewriteMapping.common];
  },
};

const pluginAntdLess = withAntdLess({
  experimental: {
    forceSwcTransforms: true,
    images: {
      allowFutureImage: true,
    },
  },
});

module.exports = withPlugins([[pluginAntdLess]], {
  ...urlRewrites,

  // for Next.js ONLY
  nextjs: {
    localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
    reactStrictMode: false,
    swcMinify: true,
  },
  webpack: (config) => {
    // Add your custom webpack config here
    config = customConfig(config, isDev);

    return config;
  },
});
