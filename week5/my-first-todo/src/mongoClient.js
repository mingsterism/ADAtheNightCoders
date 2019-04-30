const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://testAdmin:testPassword@cluster0-bnd6s.gcp.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

function pushTodo(todo) {
  console.log('------------', todo);
  client.connect(err => {
    console.log("ERR: ", err);
    const collection = client.db("testCollection").collection("todos");
    collection.insertOne(todo);
    // perform actions on the collection object
    client.close();
  });
}

module.export = {
  pushTodo
};

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
