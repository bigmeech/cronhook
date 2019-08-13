const Logger = require('pino');

const logger =  Logger({ name: 'cronhook' });
exports.debugLogger = logger;