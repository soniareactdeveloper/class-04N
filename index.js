// to stop a running server write ctrl+c

const express = require("express");
const user = require("./user");
const router = express.Router(
  {
    caseSensitive : true,
  }
);

const app = express();
app.use(express.json());
// express.static method to connect static files
app.use(express.static(__dirname + "/public"));
app.use(router)



router.get("/", (req, res) => {
  res.send("Hello World");
})

router.get("/users", (req, res) => {
  res.send(user);
})

router.get("/users/:id", (req, res) => {
  res.send(user[req.params.id]);
})

// express.post method
router.post("/login", (req, res) => {
   const {name, age } = req.body;
});


app.listen(9000, () => {
  console.log("Server is running on port 9000");
})