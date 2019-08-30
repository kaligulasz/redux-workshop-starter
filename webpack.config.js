const path = require('path');

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