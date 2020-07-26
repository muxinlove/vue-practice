// 前端工程自动化
/**
 * 前端工程自动化
 * require.context()
 * 参数
 * 1 directory {String} -读取文件的路径
 * 2 useSubdirectories {Boolean} -是否遍历文件的子目录
 * 3 regExp {RegExp} -匹配文件的正则
 * 
 * 返回一个函数
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'


// 自动导入
// webpack会创建一个以svg目录为上下文的require函数
const req = require.context('./svg', false, /\.svg$/)

// keys会获取所有svg文件
req.keys().map(req)

// 注册全局组件
Vue.component('svg-icon', SvgIcon)