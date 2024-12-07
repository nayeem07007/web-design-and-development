const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // Switch to 'production' for optimization
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleans old files on build
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,  // Extracts CSS into files
          'css-loader',                 // Turns CSS into CommonJS
          'sass-loader',                // Compiles SCSS to CSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',  // Extracted CSS file name
    }),
  ],
  devServer: {
    static: './dist',
  },
};
