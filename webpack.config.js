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
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
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
        assetModuleFilename: './dist/imgs/[hash][ext][query]'
    }
};