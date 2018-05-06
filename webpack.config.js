var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/app.jsx'
    ],
    output: {
        filename: 'app.js',
        path: path.resolve('dist')
    },
    devServer: {
        contentBase: 'public',
        hot: true, // Live-reload
        compress: true,
        port: 2020
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
              test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|otf)$/,
              loader: "file-loader",
              query: {
                name: "[path][name].[ext]"
              }
            },
            {
              test: /\.css$/,  
              include: /node_modules/,  
              loaders: ['style-loader', 'css-loader'],
            },
            {
              exclude: /node_modules/,
              loader: "babel-loader",
              query: {
                presets: ["react", "es2015", "stage-1"]
              }
            }
          ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"]
    }
};
