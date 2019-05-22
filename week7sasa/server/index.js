const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { client } = require("./mongoConn.js");
const activeClient = client.connect();

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/mynewroute", (req, res) => res.send("This is a new route"));
app.get("/myprofile", (req, res) =>
  res.sendFile(path.join(__dirname + "/pages/example.html"))
);

app.get("/mongoData", (req, res) => {
  activeClient.then(c => {
    const collection = c.db("taskDatabase").collection("mytasks");
    collection
      .find()
      .toArray()
      .then(data => res.send(data));
    client.close();
  });
});

app.post("/addUser", (req, res) => {
  req.on("data", payload => {
    console.log(JSON.parse(payload.toString()));
  });

  // collection
  //   .insertOne( {task: req.data})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
