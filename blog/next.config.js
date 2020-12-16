const withCss = require('@zeit/next-css')

if (typeof require !== 'undefined') {//处理引入css文件直接使用
    require.extensions['.css']=file =>{}
}

module.exports = withCss({})