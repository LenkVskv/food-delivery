$( document ).ready(function() {
  mainorder();
 
});
function mainorder(){
  let account = JSON.parse(localStorage.getItem("account"));
 let signup = $(".signup");
 let login = $(".login");
 let logout = $(".logout");
 let user = $(".user").find("a");
 if(account !== null){
  user.html(account.fullName);
  signup.hide();
  login.hide();
 logout.show();
 user.show();
 }
 else{

  signup.show();
  login.show();
  logout.hide();
  user.hide();
}
  logout.click((event)=>{
    event.preventDefault();
    localStorage.removeItem("account");
    mainorder();

  })
}