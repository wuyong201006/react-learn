const path = require('path');

module.exports = {

  /*入口*/
  entry: path.join(__dirname, 'src/index.js'),

  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },

  devServer:{
    contentBase: path.join(__dirname, './dist')
  }
};