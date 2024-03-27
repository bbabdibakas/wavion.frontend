import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

interface IEnv {
    mode: 'development' | 'production'
}

export default (env: IEnv) => {
    const mode = env.mode || 'development'
    const isDev = mode === 'development'

    const config: webpack.Configuration = {
        mode: 'development',
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash:8].js',
            clean: true
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
            }),
            new webpack.ProgressPlugin()
        ],
        devServer: {
            port: 3000,
            open: true
        }
    }

    return config
}