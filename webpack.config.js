const { resolve } = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    entry: {
        global: "./scripts/global.ts",
        index: "./scripts/pages/index.ts",
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new CheckerPlugin(),
    ],
    output: {
        filename: './js/[name].js',
        path: resolve(__dirname, 'dist'),
    }
};