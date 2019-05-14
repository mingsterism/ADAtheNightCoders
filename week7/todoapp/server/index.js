const express = require("express");
const path = require("path");
const port = 3000;
const { client } = require("./mongoConn.js");
const cors = require('cors')

const activeClient = client.connect();
const app = express();

app.use(cors())

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/mynewroute", (req, res) => res.send("Heyy from new route!"));
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

app.post('/addUser', (req, res) => {
  req.on('data', (payload) => {
    console.log(JSON.parse(payload.toString()))
    res.send(JSON.parse(payload.toString()))
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
