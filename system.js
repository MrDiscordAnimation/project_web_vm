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
  load(chngeCMD, 1000)
  load(user, 1000)
  load(triggerDEV, 5000)
      }
      else if (c.substring(name.length, c.length) === "disabled"){
        console.log("%c🛠 Developer Mode is still disabled...","background: red; color: white;");
        load(user, 1000)
      }
      else return load(user, 1000)
    }
  }
}
function chngeCMD(){
  //Source Code: https://www.codegrepper.com/code-examples/javascript/how+to+console.log+html+element
  var old = console.log;
  var logger = document.getElementById('issuer');
  console.log = function (message) {
      if (typeof message == 'object') {
          logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
      } else {
          logger.innerHTML += message + '<br />';
      }
  }
  console.error = function (message) {
    if (typeof message == 'object') {
        logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
    } else {
        logger.innerHTML += message + '<br />';
    }
  }
    console.info = function (message) {
      if (typeof message == 'object') {
          logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
      } else {
          logger.innerHTML += message + '<br />';
      }
  }
}

function user(){document.getElementById("usernameDisplay").innerText=localStorage.DEVUser;}
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
    modan.style.display = "block";
    console.log("%cSystem Monitor: Developer Summoned DevTools","background: black; color: white;");
  }
  if (mda === "issueCOMMAND"){
    console.log("DevTools [ADMIN]: Running Command....");
    //THANK YOU SO MUCH: https://stackoverflow.com/questions/14014371/how-do-i-convert-a-string-into-an-executable-line-of-code-in-javascript
    
    eval(document.getElementById("sendCMD").value)
    console.log("DevTools [ADMIN]: Script Loaded!")
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
  if (localStorage.banned==="true") return popup('dingus-reset'); else return;
}
else return;
}