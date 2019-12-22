const http = require('http')
const url = require('url');

(function() {
    http.createServer((req, res) => {
        console.log(req.url)
        const { url } = req;

        if (url === '/intense') {
            //do some cpuintesnse action
            intensetCPURunner(60000);
            
        }

        res.setHeader('content-type', 'text/javascript');
        res.end('done');
    }).listen(80);
}());

function intensetCPURunner(ms) {
    console.log('making cpu intenst action')
    
    var now = new Date().getTime();
    var result = 0;
    while(true) {
        result += Math.random() * Math.random();
        let date = new Date().getTime();
        if (date > now +ms)
            return date;
    }
    
}

module.exports = intensetCPURunner;