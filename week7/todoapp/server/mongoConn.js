const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://admin:blablabla@cluster0-bnd6s.gcp.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   console.log("Connecting to mongo");
//   console.error(err);

//   // perform actions on the collection object
//   const collection = client.db("taskDatabase").collection("mytasks");
//   collection
//     .find()
//     .toArray()
//     .then(data => console.log(data));
//   collection
//     .insertOne({ task: "My test insert" })
//     .then(data => console.log(data));
//   client.close();
// });

module.exports = {
  client
}

