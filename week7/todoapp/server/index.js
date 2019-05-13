const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const { client } = require("./mongoConn.js");

const activeClient = client.connect();

// activeClient.then(c => {
//   console.log(c);
//   const collection = c.db("taskDatabase").collection("mytasks");
//   collection
//     .find()
//     .toArray()
//     .then(data => console.log(data));
//   collection
//     .insertOne({ task: "My test insert" })
//     .then(data => console.log(data));
//   client.close();
// });
// console.log(activeClient);

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
  })
  

  // collection  
  //   .insertOne( {task: req.data})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
