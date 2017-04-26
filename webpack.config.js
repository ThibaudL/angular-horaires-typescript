module.exports = {
    entry: './src/main.ts',
    output: {
        filename: 'bundle.js',
        path: '/'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                loaders: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [ /node_modules/ ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};