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
 
### Build

     webpack ./main.jsx -o 'bundle.js'

### To Minify

Add this line to webpack.config.js

    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
