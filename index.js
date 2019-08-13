#!/usr/bin/env node

const server = require('./src');
const appServer = server.application({});
const { debugLogger } = require('./src/util/logger');
const port = process.env.CRONHOOK_PORT || 3000;

(async function () {
    try {
        await appServer.listen(port)
    } catch(ex){
        debugLogger.error(ex);
    }
})();