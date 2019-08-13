const { postJob } = require('./validation');
/**
 *
 * @param fastify
 * @param options
 * @param done
 */
module.exports = function jobComponent(fastify, options, done) {
    fastify.post('/v1/cron/jobs',{ schema: postJob }, (request, reply) => {
        reply.code(200).send({});
    });
    done();
};