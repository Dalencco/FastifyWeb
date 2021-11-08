async function routes(fastify, options) {
    fastify.get('/', async function(request, reply) {
        reply.view('./src/views/index.ejs')
    }),

    fastify.get('/queso', async function(request, reply) {
        reply.view('./src/views/queso.ejs')
    })

    fastify.get('/queso/:tu', async function(request, reply) {
        const params = request.params;
        reply.view('./src/views/tu.ejs', { params })
    })

    fastify.get('/try', async function(request, reply) {
        reply.view('./src/views/404.ejs')
    })

    fastify.decorate('notFound', (request, reply) => {
        reply.redirect('/try')
    })
      
    fastify.setNotFoundHandler(fastify.notFound)
}

module.exports = routes;