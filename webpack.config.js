const path = require("path");
const webpack = require("webpack");
const fs = require("fs");

const isProduction = process.env.NODE_ENV === "production";
const pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"));

module.exports = {
    // UMD library for browsers and Node
    target: "web",

    // Source maps are fine for a library build
    devtool: "source-map",

    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.es5.js", // single ES5 output (no .min here; mode=production already minifies)
        library: {
            name: "ReactZiggeo",
            type: "umd"
        },
        globalObject: "this"
    },

    // Do not bundle peer deps (react, react-dom) or the Ziggeo SDK
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "react-dom",
            root: "ReactDOM"
        }
    },

    module: {
        rules: [
            {
                test: /\.(mjs|jsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                    // .babelrc already targets ES5 (IE11), so output is minifier-friendly
                }
            }
            // No CSS/assets here: keep the library lean.
            // The app/demo should import 'ziggeo-client-sdk/build/ziggeo.css'.
        ]
    },

    resolve: {
        extensions: [".mjs", ".js", ".jsx"]
    },

    plugins: [


        new webpack.BannerPlugin({
            banner: `
/**
 * ${pkg.name} - ${pkg.description}
 * @version v${pkg.version}
 * @author ${pkg.author?.name || ""}
 * @link ${pkg.homepage || ""}
 * @license ${pkg.license || ""}
 * @ziggeo-sdk ${pkg.devDependencies?.["ziggeo-client-sdk"] || ""}
 */
`.trim(),
            raw: true,
            entryOnly: true
        })
    ],

    // Let the npm script provide the mode (`--mode production`)
    // but if none provided, default to production
    mode: isProduction ? "production" : "production"
};