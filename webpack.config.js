//kai plugina isimetu reikia ir sito varo
var HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
  contentBase: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module:{
    rules:[
      {
        test: /\.scss$/,
        use: [
          {
             loader: MiniCssExtractPlugin.loader,
             options: {
               publicPath: (resourcePath, context) => {
                 return path.relative(path.dirname(resourcePath), context) + '/';
               },
             },
           },
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        }
      }
    ]
  },
  plugins: [
    //sumeta js i html musu?
    new HTMLWebpackPlugin(),
    //istrina kas yra nenaudojama tik dist direktorijoj. logiskaii butu paskutini ji laikyti
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ]
}
