const express = require("express");
const cors = require("cors");
const port = 3000;

const app = express();

// const obj.clientConnect  = require("./mongo.js");
const { client } = require("./mongo.js");
app.use(cors());

// app.get(yourroute, (request, response))
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/myname", (request, res) => {
  res.send("BLABLAKVJASLDJASKLDJ!");
});

app.get("/mytodos", (req, res) => {
  client.then(conn => {
    // generate a cursor - a live mongodb connection to a specific collection
    const taskCollection = conn.db("taskDatabase").collection("mytasks");
    taskCollection
      .find()
      .toArray() // a promise to convert the results to an array
      .then(data => res.send(data));
  });
});

app.post("/insertTask", (req, res) => {
  req.on("data", payload => {
    client.then(conn => {
      const taskCollection = conn.db("taskDatabase").collection("mytasks");
      taskCollection.insertOne(JSON.parse(payload.toString()))
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
