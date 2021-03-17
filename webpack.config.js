const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      //   {
      //     test: /\.js$/,
      //     exclude: /node_modules/,
      //     use: {
      //       loader: "babel-loader",
      //     },
      //   },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      // {
      //   test: /\.(svg|png|jpg|jpeg)$/i,
      //   type: "asset/resource",
      // },

      {
        test: /\.(svg|png|gif|jpe?g)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },

  devtool: "source-map",

  devServer: {
    contentBase: "./dist",
  },
};
