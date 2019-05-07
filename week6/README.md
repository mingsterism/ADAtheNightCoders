## NodeJs
* **Javascript engine that read javascript (simple definition)**
* **Compiles javascript into machine language (technical definition)** 
* They have useful modules that every javascript developer users build in.
  * Modules - developers ask for useful functions that they constantly reuse.
  * These modules are built in to the engine for easy reuse by any developer

* Chrome/IE/ Firefox, do not have access to nodejs.

## Server
* expose APIs (application programming interface) to the client to call
* API's are functions that client call to get data
  * Example 
    * getTasks
    * getStudentProfile
    * deleteStudentProfile
    * updateMyTask
    * createNewTask
    * getStudents
  * Return data to the client that is calling them
* How do you create / expose APIs 
  * ExpressJS - make api creation easy
* You have build a machine / box - inputs and outputs. API's are the only way to communicate with these machines. 
* API designers are very highly sought.
* API types - CRUD


## MongoDB Js commands
```
db.mycollection.find({}) // find all the documents
db.mycollection.insertOne({name: "James", age: 20}) // insert a specific document
db.mycollection.find({name: "James"})  // find documents with name James
db.mycollection.find({age: {$gt: 19}})  // find documents with age greater than 19
```












