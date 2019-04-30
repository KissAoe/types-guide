import app from './app'
import logger from './util/logger'

/**
 * 开启 Express 服务.
 */
const server = app.listen(app.get('port'), () => {
  logger.info(`App is running at http://127.0.0.1:${app.get('port')} in ${app.get('env')} mode`)
  logger.info('Press CTRL-C to stop\n')
})

export default server