// const http = require("http");

// http.createServer((req, res) => {
//   res.write("hello world");
//   res.end();

// }).listen(9000);

// to stop a running server write ctrl+c

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
})

app.listen(9000, () => {
  console.log("Server is running on port 9000");
})