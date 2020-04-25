module.exports = {  
  entry:'./src/index.js',
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use:[
          {
            loader:'babel-loader',
            options:{             
              plugins:[
                '@babel/transform-runtime'
              ]
            }
          }, 
          {
            loader:'eslint-loader'
          }
        ]       
      },
      {
        test: /\.css$/, use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: ['url-loader']
      }
    ]
  },
  resolve:{
    extensions:['*', '.js', '.jsx', '.css']
  }, 
};   
