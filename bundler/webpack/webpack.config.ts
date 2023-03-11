import { Configuration, LoaderModule } from 'webpack';
import path from 'path';
import { Env, Ext, IS_DEV, Loader, SourceMap, TargetDir } from './webpack.var';

/*
 * https://webpack.js.org/configuration/devtool/#devtool
 * */

const webpackConfig: Configuration = {
    name: 'react-DIY',
    mode: IS_DEV ? Env.dev : Env.prod,
    devtool: IS_DEV ? SourceMap.maxDevPerformanceMap : SourceMap.maxProdPerformanceMap,
    resolve: {
        extensions: [Ext.js, Ext.js, Ext.ts, Ext.tsx, Ext.json],
        alias: {
            '@hook': path.resolve(__dirname, TargetDir.hook),
            '@component': path.resolve(__dirname, TargetDir.component),
            '@page': path.resolve(__dirname, TargetDir.page),
            '@util': path.resolve(__dirname, TargetDir.util),
        },
    },
    entry: '/',
    target: ['web', 'es6'],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [Loader.babel, Loader.ts],
            },
            {
                test: /\.css$/,
                use: [Loader.style, Loader.css],
            },
        ],
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/build/',
    },
};
