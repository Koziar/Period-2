/*

 3. Explain strategies to implement a Node.js based server architecture that still could
 	take advantage of a multi-core server.

 */
//------------------------------------------------------------------------------------------------------------------
/*
 Node is using non­threaded, event driven model to create a non­blocking API.
 A single instance of Node.js runs in a single thread.
 To take advantage of multi-core systems the user will sometimes want to launch
 a cluster of Node.js processes to handle the load.
 The cluster module allows you to easily create child processes that all share server ports.

 https://nodejs.org/api/cluster.html
 */

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
});
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
    res.end('hello world\n');
}).listen(8000);
}