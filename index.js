const http = require("http");

http.createServer((req, res) => {
  res.write("hello")
  res.end();

}).listen(9000);

// to stop a running server write ctrl+c