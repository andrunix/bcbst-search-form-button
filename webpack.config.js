const path = require('path');

module.exports = {
  context: __dirname,
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.json', '.vue']
  },
  entry: './src/SearchFormButton.vue',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bcbst-search-form-button.min.js',
    library: 'SearchFormButton',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  devtool: false,
  performance: {
    hints: false
  }
};
