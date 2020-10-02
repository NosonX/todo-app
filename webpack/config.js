const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: ["./assets/js/main.js", "./assets/scss/main.scss"],
  output: {
    filename: "./js/main.js",
    path: path.resolve(__dirname, '../public')
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3001,
      files: path.resolve(__dirname, '../views/**/*')
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: __dirname + '/../assets/images',
          to: __dirname + '/../public/images/'
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: './css/[id].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: () => [
                    require('autoprefixer')({
                        browsers: ['ie >= 8', 'last 4 version']
                    }),
                    require('cssnano')()
                ]
            }
            }
          },
          'sass-loader'
        ],
    }
    ],
  },
  watchOptions: {
    ignored: /node_modules/
  }
};
