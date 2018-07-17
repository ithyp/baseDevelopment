const path = require('path');

const config  = { 
    entry:"./index.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        historyApiFallback:true,
        inline:true,
        hot:true,
      }
}

module.exports =  config;