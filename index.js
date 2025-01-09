// to stop a running server write ctrl+c

const express = require("express");
const user = require("./user");





const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
})

app.get("/users", (req, res) => {
  res.send(user);
})


app.post ("/login", (req, res) => {
   const { name, age } = req.body;
   console.log(age);
})

app.listen(9000, () => {
  console.log("Server is running on port 9000");
})