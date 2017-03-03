var webpack = require('webpack')

module.exports = {
    entry: {
        app: "./main.js", // entry file
        vendor: ["react","react-dom"]
    },
    output: { path: __dirname, filename: '[name].bundle.js' },    
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
    plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor")
  ]
}