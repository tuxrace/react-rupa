var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:8080", // websocket
        "webpack/hot/only-dev-server", // hot loader
        "./main.js" // entry file
    ],
    output: { path: __dirname, filename: 'bundle.js' },    
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/                
            }
        ]
    },
    devtool:'cheap-module-eval-source-map',
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
}