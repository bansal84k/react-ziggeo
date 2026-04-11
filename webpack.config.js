var path = require('path');
var isProduction = process.env.NODE_ENV === 'production';
var webpack = require('webpack');
var ignore = new webpack.IgnorePlugin({ resourceRegExp: /(ziggeo-client-sdk)/ });
var fs = require('fs');

const pkg = JSON.parse(fs.readFileSync('./package.json').toString());

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: `index${isProduction ? '.min' : ''}.js`,
        library: 'ReactZiggeo',
        libraryTarget: 'umd',
        publicPath: '/static/'
    },
    plugins: [
        ignore,
        new webpack.BannerPlugin({
            banner: `
/**
 * ${pkg.name} - ${pkg.description}
 * @version v${pkg.version}
 * @author ${pkg.author.name}
 * @link ${pkg.homepage}
 * @license ${pkg.license}
 * @version of Ziggeo ${pkg.devDependencies['ziggeo-client-sdk']}
 */
      `.trim(),
            raw: true,
            entryOnly: true
        })

    ],
    resolve: {
        fallback: {
            fs: false
        }
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10000
                    }
                }
            }
        ]
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        }
    }
};
