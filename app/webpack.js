const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

let __IS_PRODUCTION__, __STATIC__
if (process.env.NODE_ENV === 'production') {
    __IS_PRODUCTION__ = true
    __STATIC__ = '"https://storage.googleapis.com/eng42-asdsad/public"'
} else {
    __IS_PRODUCTION__ = false
    __STATIC__ = '"http://localhost:3000/public"'
}

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
            {
                test: /\.md$/,
                use: 'raw-loader'
            },
            {
                test: /\.mdx?$/,
                use: [
                    {
                        loader: '@mdx-js/loader',
                        /** @type {import('@mdx-js/loader').Options} */
                        options: {}
                    }
                ]
            }
        ],
    },
    resolve: {
        alias: {
            SharedComponents: path.resolve(__dirname, 'src/SharedComponents/'),
            Theme: path.resolve(__dirname, 'src/theme.ts'),
            Projects: path.resolve(__dirname, 'src/projects'),
            Posts: path.resolve(__dirname, 'src/posts'),
            Pages: path.resolve(__dirname, 'src/pages'),
            hooks: path.resolve(__dirname, 'src/hooks'),
            services: path.resolve(__dirname, 'src/services'),
            content: path.resolve(__dirname, 'src/content'),
            SharedTypes: path.resolve(__dirname, 'src/SharedTypes'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        filename: '[name]-[fullhash].bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
            publicPath: '/public'
        },
        compress: true,
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.DefinePlugin({ __STATIC__ }),
        new webpack.DefinePlugin({ __IS_PRODUCTION__ }),
        new HtmlWebpackPlugin({
            template: './src/static/index.template.ejs',
            favicon: "./src/static/favicon.png",
            inject: 'body',
        })
    ],
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
}
