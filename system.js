(function(){
  timcook_cookies()
  load(amongus, 5000)
}())
function timcook_cookies(){
  let name = "dev" + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      if (c.substring(name.length, c.length) === "enabled"){
        console.log("%c🛠 Developer Mode has been Enabled!","background: green; color: white;");
  console.log("%cPlease Wait 5 Seconds as we grant you your Tools","background: green; color: white;")
  load(triggerDEV, 5000)
      }
      else if (c.substring(name.length, c.length) === "disabled"){
        console.log("%c🛠 Developer Mode is still disabled...","background: red; color: white;");
      }
    }
  }
}
function triggerDEV(){
  document.getElementById("devBTN").innerHTML = `<a href="#" onclick="dev('devtools')" style="float: left;" title="MDA Developer Tools"><img src="./mdadev.png" alt="mdadev" name="mdadev.png"></a>`
  console.log("%cLogged In: "+localStorage.DEVUser,"background: green; color: white;")
}

function load(resolve, ms){
  setTimeout(resolve, ms);
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
  //miliseconds only
}

function dev(mda){
  if (mda === "devtools"){
    document.getElementById("modalGUI").innerHTML=`
    <h1>Developer Tools</h1><br>
    <hr>
    <p>Console Command Summoner</p><br>
    
    `;
    modal.style.display = "block";
    console.log("%cSystem Monitor: Developer Summoned DevTools","background: black; color: white;");
  }
}
//https://stackoverflow.com/questions/17769688/custom-attributes-in-a-script-tag
function amongus(){
  var fs = document.getElementById("fileSystem").getAttribute("checksystem");
if (fs === "index.html"){
  console.log("System Monitor: User is in MAIN.");
}
else if (fs === "breh.html"){
  console.log("System Monitor: User is in breh.html")
}
else return;
}