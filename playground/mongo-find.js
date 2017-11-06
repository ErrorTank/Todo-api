const {MongoClient,ObjectID:objID}=require("mongodb");

MongoClient.connect("mongodb://localhost:27017/Users",(err,db)=>{
  if(err){
    return console.log("Unable to connect to MongoDB!...\n\n",err);
  }
  console.log("Connected to MongoDB!...\n\n");
  /*db.collection("Todos").find({_id:new objID("5a0030394f49171bb47370a9")}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,3));
  }).catch((err)=>{
    console.log("Find Todos docs failed!...\n\n");
    console.log(err);
  });*/
  /*db.collection("Todos").find().count().then((length)=>{
    console.log(`Todos docs count: ${length}`);
  }).catch((err)=>{
    console.log("Fatal error, cannot get docs count...\n\n");
    console.log(err);
  });*/
  db.collection("Users").find({name:"Kappa"}).toArray().then((docs)=>{
    console.log(`${docs.length} docs has been found: \n`);
    console.log(JSON.stringify(docs,undefined,3));
  })
  .catch((err)=>{
    console.log(`An error has occured: ${err}`);
  });
  //db.close();
});
