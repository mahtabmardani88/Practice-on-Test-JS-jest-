const service =require("./service");

function greet(a, b) {
  return a >= b ? true : false;
}
function welcome(name) {
  return `welcome ${name} . to my test page`;
}
function shopping() {
  return ["milk", "yoghurt", "brood"];
}
function user() {
  return {
    id: 1,
    name: "mahtab"
  };
}
function login(password) {
  if (password != "1234") {
    throw Error("password is wrong");
  }
  return { jwt: "hfbjefUDukuj34!" };
}
function calculateDiscount(id){
    let discount = 0 ;
    const user = service.getUserById(id);
    if(user.count > 3 ) discount = 10;
    service.sendEmail(user.name , ` you have got ${discount}`);
    return discount;
    

}

module.exports = {
  greet,
  welcome,
  shopping,
  user,
  login,
  calculateDiscount,
};
