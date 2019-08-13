const fastify = require('fastify');
const { job } = require('./components');
exports.application = function applicationFn(config = {}) {
    const app = fastify({ logger: true });
    app.register(job);
    return app;
};