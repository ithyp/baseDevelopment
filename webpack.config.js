// 一个常见的`webpack`配置文件
const webpack = require('webpack');


module.exports = {
        entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
        output: {
            path: __dirname + "/dist",//打包后的文件存放的地方
            filename: "bundle.js"//打包后输出文件的文件名
        },
        devtool: 'none',
        devServer: {
            contentBase: "./", //本地服务器所加载的页面所在的目录
            historyApiFallback: true, //不跳转
            inline: true,
            hot: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
          ],   
        module: {  
            // es6 转 es5
            rules: [{  
                test:/\.(js|jsx)$/,  
                exclude: /node_modules/,  
                loader: 'babel-loader'  
            }]  
        }  ,
        devtool: 'eval-source-map',  //生成Source Maps
        mode:'development'


}
