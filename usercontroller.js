
const user = require('./model');
exports.getalluser = (req, res)=>{
 let userlist = user.getalluser();
  res.status(200).json(userlist);
}

exports.getuserbyid = (req, res)=>{
   let {userid} = req.params;
  let userdetails = user.getuserbyid(userid);
  res.status(200).json(userdetails);
}


exports.adduser = (req, res)=>{
  var {name, age, title} = req.body;
  try{
  user.saveuser(title, name, age);
  res.status(200).send({message:'success', issuccess:'true'});
  }
  catch(e){
    res.status(500).send({message:'fail', issuccess:'false'});
  }
}