const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const sourcePath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

module.exports = (env = {}) => {
  
  return {
    context: sourcePath,

    entry: [sourcePath],

    output: {
      path: distPath,
      filename: '[name].js',
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        }
      ],
    },

    plugins: [
      new HtmlWebPackPlugin({
        template: path.join(__dirname, 'src/index.html'),
        filename: 'index.html',
        inject: 'body',
      })
    ],

    devServer: {
      host: 'localhost',
      contentBase: sourcePath,
      compress: true,
      port: 8090,
      historyApiFallback: true,
      hot: true,
    },
  }
}