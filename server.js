// server.js
var cluster = require('node:cluster');
// var { availableParallelism } = require('node:os');
 
// var numCPUs = availableParallelism(); // use all available cores
var numCPUs = 3;

if (cluster.isPrimary) {
  console.log(`primary worker with id ${process.pid} started on 0.0.0.0:8085`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log(`worker ${worker} killed by ${signal} and exited with ${code}`);
  })
} else {
  require('./app')
  console.log(`worker with process id ${process.pid} started on 0.0.0.0:8085`);
}

