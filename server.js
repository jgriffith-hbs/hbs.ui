var http = require('http'),
    httpProxy = require('http-proxy'),
    paperboy = require('paperboy');

var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function(req, res) {
  console.info(req.url);
  if (req.url.indexOf('/groupService') > -1) {
      proxy.web(req, res, {
        target: 'http://dil-etg.hbs.edu:8080/'
      });
  } else {
    paperboy.deliver(__dirname, req, res)
  }
});

console.log("listening on port 8888")
server.listen(8888);