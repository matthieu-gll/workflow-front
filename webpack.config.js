const { resolve } = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        global: "./scripts/global.ts",
        index: "./scripts/pages/index.ts",
    },
    resolve: {
        extensions: ['.ts', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        })
    ],
    output: {
        filename: './js/[name].js',
        path: resolve(__dirname, 'dist'),
    }
};