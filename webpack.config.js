module.exports = {
    entry: './src/',
    output: {
        path: './lib',
        filename: 'ractive-routes.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
        ]
    }
}