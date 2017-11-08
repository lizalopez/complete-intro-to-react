const path = require('path'); // node module that helps you resolve paths

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js', //entry point to app
  devtool: 'eval', //source maps take a little longer to build, eval is faster way of building (for debugging)
  output: {
    path: path.join(__dirname, '/public'), //where we want webpack to put bundle
    filename: 'bundle.js' //what it will be called
  },
  resolve: {
    extensions: ['.js', '.json'] //tells tool in which order to look at stuff, so first looks at js,, then json, etc
  },
  stats: {
    colors: true,
    reasons: true, //will tell you why something failed
    chunks: true
  }, 
  module: { // one f most importants, all the transforms you want
    rules: [ // if they pass this rule, t hey'll be transformed
      {
        test: /\.js$/, // can use regex. this means, if it's file ends with js, transform it and run through loader
        loader: 'babel-loader' //which is a module we installed with yarn
      }
    ]
  }
}
// were' doing commonjs here  (default node way) instead of es6 modules is that this is only run in node. 
