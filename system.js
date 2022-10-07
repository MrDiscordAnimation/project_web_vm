
var z = new URLSearchParams(location.search);
if ((z).has("user")){
  console.log("%c"+(z).get("user"),"background: powderblue; color: green;");
  //document.getElementById("usernameDisplay").innerText = (z).get("user");
}