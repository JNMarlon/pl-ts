import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const IS_DEV = process.env.NODE_ENV === 'development';
export const Loader = {
    babel: 'babel-loader', // js to js
    ts: 'ts-loader', // ts to js
    css: 'css-loader', // interprets @import and url() like import/require() and will resolve them.
    style: IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader, // enable 'import ./style.css' like
};
export enum Env {
    dev = 'development',
    prod = 'production',
}
export enum Ext {
    js = '.js',
    jsx = '.jsx',
    ts = 'ts',
    tsx = 'tsx',
    json = '.json',
}

export enum SourceMap {
    maxDevPerformanceMap = 'eval',
    maxProdPerformanceMap = 'none',
}
export enum TargetDir {
    hook = 'hook',
    component = 'component',
    page = 'page',
    util = 'util',
}
