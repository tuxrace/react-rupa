# R.U.P.A
### Remarkable Understanding Personal Agent
    
   Rupa is a messaging app chat bot, that can perform simple taks, and give out instant answers to common inquiries.
### Working demo
[https://tuxrace.github.io/rupa/](https://tuxrace.github.io/rupa/)
    
### Technologies Used
 - ReactJS
 - Node.js
 - Socket.io
 - Bluemix
 
### Serve

     webpackdev-server --progress --colors
     http://localhost:8080
or 

     simplehttpserver .
     http://localhost:8000

### Build

     webpack --progress --colors ./main.js -o 'bundle.js'

### To Minify

Add this entry to webpack.config.js

    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
