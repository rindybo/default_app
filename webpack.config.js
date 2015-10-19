var path = require('path');
module.exports = {
    resolve: {
        root: path.resolve('./'),
        extensions: ['', '.js','.json']
    },
    entry: {
        index:'./js/index.js'
    },
    output: {
        path: './dist/js',
        filename: '[name].js'
    },
    module: {
        loaders: []
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
