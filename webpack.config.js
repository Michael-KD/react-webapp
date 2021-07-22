const path = require('path');

module.exports = {
    mode: "development",
    // production
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "bundle.js"
    },
    target: "node",
    devServer: {
        port: "9500",
        contentBase: ["./public"],
        open: true
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
            test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};