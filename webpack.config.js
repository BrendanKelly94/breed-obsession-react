const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = {
  entry: ['babel-polyfill','./lib/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.[chunkhash].js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ],
  },
  plugins: [
    new WorkboxPlugin.GenerateSW({
      swDest: 'service-worker.js',
      // Exclude images from the precache
      exclude: [/\.(?:png|jpg|jpeg|svg)$/],
      // Define runtime caching rules.
      runtimeCaching: [
        {
          // Match any request ends with .jpg
          urlPattern: /https.*pet.find.*/,
          // Apply a cache-first strategy.
          handler: 'networkFirst',
          options: {
            cacheName: 'postings-cache',
            expiration: {
              maxEntries: 25,
            },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        {
          urlPattern: /http.*keys.*/,
          handler: 'cacheFirst',
        },
        {
          urlPattern: /https.*breed.list.*/,
          handler: 'staleWhileRevalidate',
          options: {
            cacheName: 'postings-cache',
            expiration: {
              maxEntries: 500,
            },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        {
          urlPattern: /https.*andruxnet-world-cities.*/,
          handler: 'cacheFirst',
          options: {
            cacheName: 'postings-cache',
            expiration: {
              maxEntries: 100,
            },
            cacheableResponse: { statuses: [0, 200] },
          },
        }
      ],
    }),new HtmlWebpackPlugin({
      hash: true,
      template: path.join(__dirname, 'views', 'index.ejs'),
    }),
    new CleanWebpackPlugin(['public']),
  ],
  devServer: {
    historyApiFallback: {
      index: 'index.html'
    }
  }
};

module.exports = config;
