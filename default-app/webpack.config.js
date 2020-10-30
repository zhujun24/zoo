module.exports = {
  output: {
    library: 'default-app-[name]',
    libraryTarget: 'umd',
    jsonpFunction: 'webpackJsonp_default-app',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },
  devServer: {
    disableHostCheck: true
  },
}
