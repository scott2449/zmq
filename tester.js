var fork = require('child_process').fork;

fork('router');
fork('worker');
fork('worker');
fork('worker');
fork('client');
fork('client');
fork('client');
fork('client');
fork('client');