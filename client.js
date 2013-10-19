var zmq = require('zmq')
  , requester = zmq.socket('req');

//requester.connect('tcp://localhost:5559');
requester.connect('ipc://router.ipc');
var replyNbr = 0;
requester.on('message', function(msg) {
  var obj = JSON.parse(msg);
  obj.clientr = process.pid;
  console.info(obj);
  replyNbr += 1;
  if(replyNbr === 10){
    process.exit(0);
  }
});

for (var i = 0; i < 10; ++i) {
  requester.send('{"client":"'+process.pid+'"}');
}
