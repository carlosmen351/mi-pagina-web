const path = require('path'); //*sirve para conocer el entorno donde se esta desarrollando la app, sea una computadora remota o un servidor
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',//*Archivo principal donde va a ejecutarse la configuracion
  output: {//*configuracion de salida y nombre del archivo
    path: path.resolve(__dirname, 'dist'),//se utiliza "dist" como convencion de distibucion
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: "development", //*esta configuracion es necesaria para evitar warnings en consola
  resolve: {
    extensions: ['.js', '.jsx'], //*sirve para que pueda entender los dos tipos de extenciones
  },
  module: {//*Configuraciones
    rules: [
      {
        test: /\.(js|jsx)$/,//*Logra identificar los archivos
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.png|.svg/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
  devServer: {
    allowedHosts: path.join(__dirname, 'dist'),
    compress: true,
    port: 3005,
    open: true
  }
}