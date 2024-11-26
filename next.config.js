// next.config.js
module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /node_modules/,
      });
  
      // You can also disable source maps for development if needed
      // config.devtool = false;
  
      return config;
    },
  };
  