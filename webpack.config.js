const path = require('path');

module.exports = {
    entry : './src/js/index.js',
    output:{
        path: path.join(__dirname,"dist"),
        filename:'js/bundle.js'
    },
    devServer:{
        static: {
            directory: path.join(__dirname,'dist'),
        },
    }
}
