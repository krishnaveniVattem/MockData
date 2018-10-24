/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const VueLoaderPlugin  = require('vue-loader/lib/plugin');
module.exports={
    entry:"./src/index.js",
    output:{
        path:__dirname,
        filename:'./dist/bundle.js'
        
    },
    devServer: {   
       
        stats: "errors-only",
        host: process.env.HOST, 
        port: process.env.PORT,
        open: true,
        
      },
      mode:"development",
    module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
     
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
       {
    test: /\.(scss)$/,
    use: [{
      loader: 'style-loader', // inject CSS to page
    }, {
      loader: 'css-loader', // translates CSS into CommonJS modules
    }, {
      loader: 'postcss-loader', // Run post css actions
      options: {
        plugins: function () { // post css plugins, can be exported to postcss.config.js
          return [
            require('precss'),
            require('autoprefixer')
          ];
        }
      }
    }, {
      loader: 'sass-loader' // compiles Sass to CSS
    }]
  },
            {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
              }
            ]
          }
    ]
  },
  
   plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]
};
 

