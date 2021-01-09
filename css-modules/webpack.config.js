module.exports = {
  entry:  './src',
  output: {
    path: __dirname + '/build',
      filename: 'bundle.js',
    },
  module: {
    rules: [
      {
        test: /\.js/,
        use: 'babel-loader',
        include: __dirname + '/src',
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
        include: __dirname + '/src'
      }
    ],
  }
};