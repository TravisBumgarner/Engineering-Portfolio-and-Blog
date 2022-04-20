const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        alias: {
            SharedComponents: path.resolve(__dirname, 'src/sharedComponents/'),
            Theme: path.resolve(__dirname, 'src/theme.ts'),
            Content: path.resolve(__dirname, 'src/content')
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        filename: '[name]-[hash].bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.DefinePlugin({ __MEDIA__: '"https://storage.googleapis.com/eng42-asdsad/media/"' }),
        new webpack.DefinePlugin({ __STATIC__: '"https://storage.googleapis.com/eng42-asdsad/static/"' }),
        new webpack.DefinePlugin({ __IS_PRODUCTION__: process.env.NODE_ENV === 'production' }),
        new HtmlWebpackPlugin({
            template: './src/index.template.ejs',
            favicon: "./src/favicon.png",
            inject: 'body'
        })
    ]
}
