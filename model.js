const userlist = [];
let x = 1;
module.exports = class user{
  // user(title, name, age){
  //   this.name = name;
  //   this.title = title;
  //   this.age = age;
  // }
   static saveuser(title, name, age){
      userlist.push({
        id : x,
        title : title,
        name : name,
        age : name
        });
        x++;
       
   }

   static getalluser()
   {
     return userlist;
   }

    static getuserbyid(userid)
   {
     let i = Number(userid);
     const user = userlist.find(({id}) => id ===  i);
     return user;
   }

}