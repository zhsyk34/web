var webpack = require('webpack');
// var hp = require('html-webpack-plugin');

module.exports = {
    // 入口：要进行处理的实例（js）
    entry: './temp.js',
    // entry: {
    //     index: './src/pages/index/index.js',
    //     list: './src/pages/list/index.js',
    //     common: [
    //         './src/base/base.js',
    //         './src/base/base.css'
    //     ]
    // },
    // 出口：输出配置
    output: {
        // 输出到哪个目录
        // path: __dirname,
        path: './',
        // 静态资源的引用路径
        // publicpath: '/asset/dev/',
        // 实例最终输出的名字
        filename: 'main.js'
        // filename: '[name].js'[name]=entry.key???
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by zsy'),
        // new hp()
    ]
};
