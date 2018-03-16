const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',

    devServer: {
        contentBase:'./dist',
        //open: true,
        compress: true,
        hot: true,
        historyApiFallback: true,
       // port: 9000
        
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            }
        ]
    },
  
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({template: './src/public/index.html', filename: './index.html'}),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()  
    ]
}