const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    "main": path.resolve(__dirname, "src/js/index.js"),
  },
  output: {
    filename: "webreplaygen.js"
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  resolve: {
    fallback: {
      "fs": "false",
      "path": false,
      "util": false
    }
  }   
}
