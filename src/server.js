const hapi = require('@hapi/hapi')
const routes = require('./routes')

const host = 'localhost'
const port = 9000

;(async () => {
  const server = hapi.server({ host, port, routes: { cors: true } })

  server.route(routes)

  try {
    await server.start()
    console.log('server listening on ', server.info.uri)
  } catch (error) {
    console.error('error starting server: \n', error)
  }
})()
