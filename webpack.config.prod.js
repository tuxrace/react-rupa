var webpack = require('webpack')

module.exports = {
    entry: {
      app:'./main.js',
      vendor: ['react','react-dom']
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
    plugins:[                
        new webpack.optimize.UglifyJsPlugin()
    ]
}