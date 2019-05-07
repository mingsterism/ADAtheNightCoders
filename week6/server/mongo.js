const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://admin:blablaman1@cluster0-bnd6s.gcp.mongodb.net/test?retryWrites=true";
// Connect to the db
const client = MongoClient.connect(uri, { useNewUrlParser: true });

// client.then(conn => {
//   const taskCollection = conn.db("testCollection").collection("mytasks");
//   taskCollection
//     .find({})
//     .toArray()
//     .then(data => console.log(data));
// });

// function getTasks() {
//   return client.connect(err => {
//     const collection = client.db("testCollection").collection("mytasks");
//     return collection
//       .find({})
//       .toArray()
//       .then(data => {
//         return data;
//       })
//       .then(() => {
//         client.close();
//       });
//   });
// }

// getTasks().then(data => console.log(data));

module.exports = {
  client
};
