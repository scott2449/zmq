var zmq      = require('zmq')
  , frontend = zmq.socket('router')
  , backend  = zmq.socket('dealer');

//frontend.bindSync('tcp://*:5559'); 
frontend.bindSync('ipc://router.ipc');
//backend.bindSync('tcp://*:5560'); 
backend.bindSync('ipc://dealer.ipc');

frontend.on('message', function() {
 
  var args = Array.apply(null, arguments);
  //console.info(args)
  backend.send(args);
});

backend.on('message', function() {
  var args = Array.apply(null, arguments);
  //console.info(args)
  frontend.send(args);
});