module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/mi": {
        target: "https://m.xiaomiyoupin.com",
        changeOrigin: true,
        pathRewrite: {
          "^/mi": "",
        },
      },
      "/micart": {
        target: "https://trade.m.xiaomiyoupin.com",
        changeOrigin: true,
        pathRewrite: {
          "^/micart": "",
        },
      },
    },
  },
};
