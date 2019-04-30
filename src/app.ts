import { router } from './route/index'
import mustacheExpress from 'mustache-express'
import express = require('express')

// 加载环境配置信息
require('dotenv').config()

// 创建 express 应用
const app = express()

// 设置配置信息
app.set('port', process.env.EXPRESS_PORT || 3000)

// 设置模板引擎
app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', '/src/views')

// 设置路由
app.use('/', router)

export default app