var zmq = require('zmq')
  , responder = zmq.socket('rep');

//responder.connect('tcp://localhost:5560');
responder.connect('ipc://dealer.ipc');
responder.on('message', function(msg) {
  var obj = JSON.parse(msg);
  setTimeout(function() {
    responder.send('{"worker":"' + process.pid + '", "client":"'+obj.client+'"}');
  }, 200);
});