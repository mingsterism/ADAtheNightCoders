const express = require("express");
const cors = require("cors");
const port = 3000;

const app = express();

// const obj.client  = require("./mongo.js");
const { client } = require("./mongo.js");
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/myname", (req, res) => res.send("BLABLAKVJASLDJASKLDJ!"));

app.get("/mytodos", (req, res) => {
  client.then(conn => {
    const taskCollection = conn.db("testCollection").collection("mytasks");
    taskCollection
      .find({})
      .toArray()
      .then(data => res.send(data));
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
