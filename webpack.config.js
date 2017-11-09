const path = require('path') // node module that helps you resolve paths

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js', // entry point to app
  devtool: 'eval', // source maps take a little longer to build, eval is faster way of building (for debugging)
  output: {
    path: path.join(__dirname, '/public'), // where we want webpack to put bundle
    filename: 'bundle.js' // what it will be called
  },
  devServer: {
    publicPath: '/public/' // identifying to dev server, what the static files are - setting up "static fie serving"
  },
  resolve: {
    extensions: ['.js', '.json'] // tells tool in which order to look at stuff, so first looks at js,, then json, etc
  },
  stats: {
    colors: true,
    reasons: true, // will tell you why something failed
    chunks: true
  },
  module: { // one f most importants, all the transforms you want
    rules: [ // if they pass this rule, t hey'll be transformed
      {
        enforce: 'pre', // before any of the build process, run this loader, don't care whaat hte output as long as it runs. synonymous with pre-loader, just the new name
        test: /\.js$/,
        loader: 'eslint-loader', 
        exclude: /node_modules/ //ignore every one else's code in npm modules
      },
        {
        // exclude: /node_modules/, // says to not run node modules through babel, but more effcient is to include only js directory
        include: path.resolve(__dirname, 'js'), // says, if it is not in my js files, do't include in babel
        test: /\.js$/, // can use regex. this means, if it's file ends with js, transform it and run through loader
        loader: 'babel-loader' // which is a module we installed with yarn
      },
      { // we're adding anotehr rule for css
        test: /\.css$/,
        use: [
          'style-loader',
          { // pass an object here becase we need confit
            loader: 'css-loader', // if you include css loader, you have to include style loader
            options: {
              url: false // don't inline my images
            }
          }
          // now we can import css into js
        ]
      }
    ]
  }
}
// were' doing commonjs here  (default node way) instead of es6 modules is that this is only run in node.
