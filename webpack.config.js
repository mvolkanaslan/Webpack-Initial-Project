const path = require('path');

module.exports = {
    entry : ["@babel/polyfill","./src/js/index.js"],//Packaging the index.js with the Polyfill package for transfer the ES6+ code to ES5
    output:{
        path: path.join(__dirname,"dist"),
        filename:'js/bundle.js',
    },
    devServer:{
        static: {
            directory: path.join(__dirname,'dist'),
        },
    },
    module:{
        rules:[
            //this rule for only javascript packaging
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets : ['@babel/preset-env'],
                    }
                }
            },
            //this rule for css packaging
            {
                test: /\.css$/i,
                use:["style-loader","css-loader"]
            }
        ]
    }
}
