import winston from 'winston'
const { combine, timestamp, printf } = winston.format

const logFormat = printf(({ level, message, timestamp }) => {
    return `[${level}] [${timestamp}] ${message}`
})

// development 开发环境
// production  生产环境
const logger = winston.createLogger({
    format: combine(
        timestamp({format: 'YYYY-MM-dd HH:mm:ss'}),
        logFormat
    ),
    transports: [
        new (winston.transports.Console)({ level: process.env.NODE_ENV === 'production' ? 'info' : 'debug' }),
        new (winston.transports.File)({ filename: 'logs/debug.log', level: 'debug' }),
        new (winston.transports.File)({ filename: 'logs/info.log', level: 'info' }),
        new (winston.transports.File)({ filename: 'logs/error.log', level: 'error' })
    ]
})

console.log(`-> winston logger initialized at ${logger.level} level <-`)

export default logger
