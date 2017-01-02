# R.U.P.A
### Remarkable Understanding Personal Agent
    
   Rupa is a messaging app chat bot, that can perform simple taks, and give out instant answers to common inquiries.
### Working demo
[https://tuxrace.github.io/react-rupa/](https://tuxrace.github.io/react-rupa/)
    
### Technologies Used
 - ReactJS
 - Node.js
 - Socket.io
 - Bluemix
 
### Serve

     webpack-dev-server --inline --hot
     http://localhost:8080
or 

     simplehttpserver .
     http://localhost:8000

### Build

     webpack --progress --config webpack.config.prod.js -p

### To Minify

Add this entry to webpack.config.prod.js

    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
