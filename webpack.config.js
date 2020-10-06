const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            "plugins": ["@babel/plugin-proposal-class-properties"],
            "presets": ["@babel/preset-react", "@babel/preset-env"]
        }
        },
      },
    ],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};
