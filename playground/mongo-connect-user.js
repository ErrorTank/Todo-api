const {MongoClient,ObjectID}=require("mongodb");
//var obj=new ObjectID();
//console.log(obj);
//var user={name:"Kappa",age:20};

//var {name}=user;
//console.log(name);
// or
//var {name:userName}=user;
//console.log(userName);
 //var {name,age}=user
//console.log(`${name} --- ${age}`);
// or
//var {name:userName,age:userAge}=user;
//console.log(`${userName} --- ${userAge}`);

MongoClient.connect("mongodb://localhost:27017/Users",(err,db)=>{
  if(err){
    return console.log("Unable to connect to MongoDB server!...\n\n",err);
  }
  console.log("Connected to MongoDB server!...");



db.collection("Users").insertMany(

  [
    {
      name:"Kappa",
      age:20,
      location:"155 Tay Son"
    },{
      name:"Horse",
      age:30,
      location:"West Lake"
    },{
      name:"Wibu boi",
      age:24,
      location:"Turtle Lake"
    },{
      name:"Kappa",
      age:22,
      location:"167 Tay Son"
    }
  ],(err,result)=>{
    if(err){
      return console.log(`An error has occured \n ${err}`);
    }
    console.log(`Insert success:\n ${JSON.stringify(result.ops,undefined,3)}`);
    console.log(result.ops[0]._id.getTimestamp());
    console.log(result.ops[1]._id.getTimestamp());
    console.log(result.ops[2]._id.getTimestamp());
  });
  db.close();
});
