module.exports = {
  pages: {
    index: {
      entry: 'src/main.js'
    }
  },
  lintOnSave: false,
  devServer:{
    proxy:{
      '/api':{
        target: 'localhost:5000',
        changeOrigin: true,
        pathRewrite:{'^/api':''}
      }
    }
  }
}