const {MongoClient,ObjectID:objID}=require("mongodb");


/*MongoClient.connect("mongodb://localhost:27017/ToDoTask",(err,db)=>{
  if(err){
    return console.log("Unable to connect to MongoDB!...\n\n",err);
  }
  console.log("Connected to MongoDB!...\n\n");
  db.collection("Todos").findOneAndUpdate({
    _id:new objID("5a0030394f49171bb47370a9")
  },{
    $set: {
        completed:true
    }
  },{
    returnOriginal:false
  }).then((res)=>{
    console.log(res);
  });
});*/
MongoClient.connect("mongodb://localhost:27017/Users",(err,db)=>{
  if(err){
    return console.log("Unable to connect to MongoDB!...\n\n",err);
  }
  console.log("Connected to MongoDB!...\n\n");
  db.collection("Users").findOneAndUpdate({
    _id:new objID("5a0036547b076d23ac3b7978")
  },{
    $inc:{
      age:-8,
      "girl.times":4
    },
    $set:{
      name:"Kappa"
    }
  },{
    returnOriginal:false
  }).then((res)=>{
    console.log(res);
  });
});
