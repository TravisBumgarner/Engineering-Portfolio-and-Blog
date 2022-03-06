const path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
    return {
        entry: {
            app: './src/index.tsx'
        },
        module: {
            rules: [
                {
                    test: /\.[jt]s[x]?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                }
            ]
        },
        output: {
            filename: '[name]-[hash].bundle.js',
            path: path.resolve(__dirname, 'public'),
            publicPath: '/'
        },
        resolve: {
            alias: {
                SharedComponents: path.resolve(__dirname, 'src/sharedComponents/'),
                Theme: path.resolve(__dirname, 'src/theme.ts'),
                Content: path.resolve(__dirname, 'src/content')
            },
            extensions: ['.ts', '.tsx', '.js']
        },
        devServer: {
            contentBase: './public',
            port: 3000,
            historyApiFallback: true,
            publicPath: '/'
        },
        plugins: [
            new webpack.DefinePlugin({ __MEDIA__: '"https://storage.googleapis.com/eng42-asdsad/media/"' }),
            new webpack.DefinePlugin({ __STATIC__: '"https://storage.googleapis.com/eng42-asdsad/static/"' }),
            new webpack.DefinePlugin({ __IS_PRODUCTION__: env.NODE_ENV === 'production' }),
            new HtmlWebpackPlugin({
                template: './src/index.template.ejs',
                favicon: "./src/favicon.png",
                inject: 'body'
            })
        ]
    }
}
