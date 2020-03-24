var glob = require('glob')
var path = require('path')

//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
  let entries = {}
  glob.sync(globPath).forEach(function(entry, i) {
    let filename = entry.split('src/view/')[1]
    let middlePath = filename.split('/index.html')[0]
    let dirList = middlePath.split('/')
    entries[dirList[dirList.length - 1]] = {
      entry: 'src/view/' + middlePath + '/main.js',
      template: 'src/view/' + middlePath + '/index.html',
      filename: middlePath + '.html'
    }
  })
  console.log('entries', entries)
  return entries
}
const PAGES = getEntry('src/view/**/index.html')
module.exports = {
  publicPath: '/', // 官方要求修改路径在这里做更改，默认是根目录下，可以自行配置
  outputDir: 'dist', //标识是打包哪个文件
  productionSourceMap: false,
  pages: PAGES,
  chainWebpack: config => {
    // 移除 prefetch 插件(https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch)
    config.plugins.delete('prefetch')
  }
}
