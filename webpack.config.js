//using the html-webpack-plugin we npm installed and saved
//into package.json
//create a variable that says go get the html-webpack-plugin
//module that you npm installed and save the object that
//it returns to the variable HtmlWebpackPlugin
var HtmlWebpackPlugin = require('html-webpack-plugin');
//create a new instance of the HtmlWebpackPlugin object
//pass some config options to HtmlWebpackPlugin to
//HtmlWebpackPluginConfig
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  //the file that we want you to transfer to /dist the template
  //that we want you to use is 'app/index.html'
  template: __dirname + '/app/index.html',
  //the filename we want you to call it is 'index.html'
  filename: 'index.html',
  //the place we want you to inject it is the body
  inject: 'body'
})

//webpack takes code and transforms it however you want it to and then outputs it all to one single file
  // export this object (module.exports) which is going to represent the rules that we have for webpack
module.exports = {
  //tell webpack where the main entry point of our app is
  entry: [
    './app/index.js'
  ],
  // tell webpack where to put the file that it creates for us
  output: {
    // __dirname is the name of the directory that the currently executing script resides in (our root directory)
    path: __dirname + '/dist',
    // this is what the transformed code's file will be named:
    filename: "index_bundle.js"
  },
  // tell webpack what transformations to make on the code
  module: {
    loaders: [
      // match any js files in our project for this transformation
      //exclude anything in node_modules directory
      // transformation were making on them is babel loader. it takes the JSX and transforms it into JS. It also does other transformations like transforming to newer JS version.
      {test: /\.js$/, exclude: /node_modules/, loader:"babel-loader"}
      // set up babel configuration in .babelrc to tell this loader what sort of transformations to make on this code
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
