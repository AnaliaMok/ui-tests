const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const path = require('path');
module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true
          }
        }
      ]
    },
    {
      test: /\.css$/,
      loaders: [
        // Loader for webpack to process CSS with PostCSS
        {
          loader: 'postcss-loader',
          options: {
            /*
              Enable Source Maps
             */
            sourceMap: true,
            /*
              Set postcss.config.js config path && ctx
             */
            config: {
              path: './'
            }
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    }
  );

  config.resolve.extensions.push('.ts', '.tsx', '.vue', '.css', '.less', '.scss', '.sass', '.html');
  config.resolve.alias = {
    ...config.resolve.alias,
    vue$: 'vue/dist/vue.esm.js',
    '@': path.join(__dirname, '..', 'src')
  };
  config.plugins.push(new ForkTsCheckerWebpackPlugin());
  return config;
};
