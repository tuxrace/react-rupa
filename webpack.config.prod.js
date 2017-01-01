var webpack = require('webpack')

module.exports = {
    entry: './main.js',
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
    plugins:[                
        new webpack.optimize.UglifyJsPlugin()
    ]
}