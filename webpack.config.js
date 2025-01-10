const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Entry point
    output: {
        path: path.resolve(__dirname, 'dist'), // Output folder
        filename: 'bundle.js', // Output file
        clean: true, // Clean output directory before building
    },
    mode: 'development', // Set mode ('development' or 'production')
    module: {
        rules: [
            {
                test: /\.html$/i, // Handle HTML files
                loader: 'html-loader',
            },
            {
                test: /\.scss$/i, // Handle SCSS/SASS files
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i, // Handle CSS files
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/i, // Handle JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Source HTML
        }),
    ],
    devServer: {
        static: './dist', // Serve content from dist folder
        port: 9000, // Development server port
        open: true, // Automatically open the browser
    },
};
