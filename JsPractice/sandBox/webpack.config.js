module.exports = {
  entry: 'entry.js',
  outpath: {
    path: 'dist',
    filname:'bundle.js'
  },
  module: {
    loaders: [
      {
      test: /.js$/,
      exclude: '/node_modules/',
      loader: 'babel',

      }
    ]
  },
};
