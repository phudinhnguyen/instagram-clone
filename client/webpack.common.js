const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const SRC_DIR = path.resolve(__dirname, "src");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const rootDir = path.resolve(process.cwd());
const glob = require("glob");
const VENDOR_LIBS = [
    "axios",
    "react",
    "react-dom",
    "react-router",
    "react-router-dom",
];
module.exports = (purgecss = false) => {
    let plugins = [
        new HtmlWebpackPlugin({
            template: SRC_DIR + "/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new webpack.ProvidePlugin({
            // inject ES5 modules as global vars
            $: "jquery",
            jQuery: "jquery",
            "window.$": "jquery",
            "window.jQuery": "jquery",
        }),
    ]
    return {
        entry: {
            bundle: path.join(__dirname, "./src/index.tsx"),
            vendor: VENDOR_LIBS,
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    loader: "babel-loader",
                    exclude: ["/node_modules/", "/build/"],
                },
                {
                    enforce: "pre",
                    test: /\.js?$/,
                    loader: "source-map-loader",
                },
                {
                    loader: "file-loader",
                    test: /\.gz$|\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2|\.eot$|.ttf$|\.wav$|\.mp3$|\.icon$|\?[a-z0-9]+?$/,
                    query: {
                        name: "[name]-[md5:hash:8].[ext]",
                    },
                },
                {
                    test: /\.(css|sass|scss)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1,
                                sourceMap: true,
                                modules: true,
                                localIdentName: "[local]_[hash:base64:5]",
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                                includePaths: [
                                    path.resolve(__dirname, "src/assets"),
                                    path.resolve(__dirname, "src/modules"),
                                ],
                            },
                        },
                    ],
                },
            ],
        },
        plugins,
        resolve: {
            extensions: [".js", ".ts", ".tsx"],
            plugins: [new TsConfigPathsPlugin(/* { tsconfig, compiler } */)],
        },
    };
};