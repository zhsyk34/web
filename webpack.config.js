var webpack = require('webpack');
// var base = "src/main";
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'commons', // 这公共代码的chunk名为'commons'
    filename: 'js/[name].js', // 生成后的文件名，虽说用了[name]，但实际上就是'commons.bundle.js'了
    minChunks: 2 // 设定要有4个chunk（即4个页面）加载的js模块才会被纳入公共代码。这数目自己考虑吧，我认为3-5比较合适。
});

// require("./src/base.css") // 载入 base.css

module.exports = {
    entry: {
        main: './src/js/main.js',
        test: './src/js/test.js'
    },
    output: {
        path: './dist',
        // publicpath: 'http://www.test.com', // 这里替换成线上实际地址，可以修改 css 中对图片资源的引用路径。
        filename: 'js/[name].js' // 生成的文件名字，加上了5位的 hash值。当然了，位数和加hash的位置，你可以自己定义，比如 '[name].js?[hash]'.
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                // loader: 'style!css'
                //单独打包CSS
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    plugins: [
        // // new hp({
        // //     title: 'index',
        // //     filename: 'a.html',
        // //     // template: ''
        // // }),
        //commons 模块
        commonsChunkPlugin,
        new HtmlWebpackPlugin({
            // body: "hello",
            // title: "first",
            filename: "first.html",
            chunks: ["main"],
            // template: "./src/template.ejs",
            inject: true,
            hash: false,
            showErrors: true
        }),
        new ExtractTextPlugin('css/[name].css')
    ]
};

// module.exports = {
//     entry: './src/temp.js',
//     output: {
//         path: 'dest',
//         filename: 'a.js'
//     },
//     plugins: [new hp({
//         title: 'index',
//         filename: 'a.html',
//         template: ''
//     })]
// };
