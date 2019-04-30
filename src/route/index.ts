import express = require('express')

const router = express.Router()

// 首页
router.get('/', (req: any, res: any) => {
    console.log(req)
    res.send('Hello World!')
})

// 时间
router.get('/time', (req: any, res: any) => {
    res.send(new Date())
})

// 列表模板
router.get('/list', (req: any, res: any) => {
    res.render('list', { title: 'types-guide' })
})

export { router }