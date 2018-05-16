
module.exports = (env, argv) => {

  const path = require('path');
  const CopyPlugin = require('copy-webpack-plugin');
  const ExtractPlugin = require('extract-text-webpack-plugin');

  const mode = argv.mode || 'development';
  const outputPath = path.join(__dirname, 'dist');
  const assetsPath = './assets';

  // register plugins

  const plugins = [];

  const lessExtractPlugin = new ExtractPlugin({ filename: path.join(assetsPath, 'style.css') });
  plugins.push(lessExtractPlugin);

  if (mode === 'production') {
    // copy static content to output
    plugins.push(new CopyPlugin([{ from: './static' }]));
  }

  // create config 

  return  {
    entry: [
      './src/scripts/_script.tsx',
      './src/styles/_style.less'
    ],
    devtool: 'source-map',
    mode: mode,
    output: {
      filename: path.join(assetsPath, 'script.js'),
      path: outputPath,
      publicPath: ''
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.less', '.css']
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          include: [path.resolve('./src/scripts')],
          loader: 'ts-loader'
        },
        {
          test: /\.(less|css)$/,
          include: [path.resolve('./src/styles')],
          use: lessExtractPlugin.extract(
            {
              use: [
                { loader: 'css-loader', options: { minimize: mode === 'production', sourceMap: true } },
                { loader: 'less-loader', options: { sourceMap: true } }
              ]
            })
        }
      ]
    },
    plugins: plugins
  };
};