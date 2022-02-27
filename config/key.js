
// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://hicham:<password>@cluster0.yok54.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

module.exports= {
  mongoURI : "mongodb+srv://hicham:hiicham@cluster0.yok54.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
}