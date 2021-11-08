const fastify = require('fastify')({ logger: process.env.LOG_LEVEL || false })
const path = require('path')

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public')
})

fastify.register(require('point-of-view'), {
    engine: {
      ejs: require('ejs')
    }
})

fastify.register(require('./routes'))

fastify.listen(process.env.PORT, '0.0.0.0', (err, address) => {
    if (err) throw err
    fastify.log.info(`server listening on ${address}`)
})