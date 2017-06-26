var path = require('path');

var outPath = path.join(__dirname, './dist');

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: __dirname,
    filename: "dist/bundle.js",
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.js'],
  },
  module: {

    loaders: [
      // .ts, .tsx
      {
        test: /\.ts?$/,
        use: [
          'ts-loader'
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html'
    },
    hot: true
  }
};

