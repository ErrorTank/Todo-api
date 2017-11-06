const {MongoClient,ObjectID:objID}=require("mongodb");

MongoClient.connect("mongodb://localhost:27017/Users",(err,db)=>{
  if(err){
    return console.log("Unable to connect to MongoDB!...\n\n",err);
  }
  console.log("Connected to MongoDB!...\n\n");
/*  db.collection("Todos").deleteMany({content:"Walk Dog"}).then((result)=>{
    console.log(result);
  })
  .catch((err)=>{
    console.log("Delete all failed");
  });*/
  /*db.collection("Todos").deleteOne({content:"Walk Dog"}).then((result)=>{
    console.log(result);
  })
  .catch((err)=>{
    console.log("Delete one failed");
  });*/

  /*db.collection("Todos").findOneAndDelete({completed:false}).then((result)=>{
    console.log(result);
  })
  .catch((err)=>{
    console.log("Delete one failed");
  });*/
  db.collection("Users").deleteMany({name:"Kappa"}).then((result)=>{
    console.log(result);
  })
  .catch((err)=>{
    console.log("Delete many failed");
  });
  db.collection("Users").findOneAndDelete({_id:new objID("5a0072cde56311861e54ad26")}).then((result)=>{
    console.log(result);
  })
  .catch((err)=>{
    console.log("Delete many failed");
  });
});
