var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://okito:Ek1T9h28uZmYkp5v@okitodb-llffi.mongodb.net/test";
MongoClient.connect(uri, function(err, client) {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});