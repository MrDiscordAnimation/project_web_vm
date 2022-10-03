(function(){
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
        console.log("%c🛠 Developer Mode has been Enabled!","background: green; color: black;");
      }
    }
  }
}())
function triggerDEV(){
  document.getElementById("devBTN").innerHTML = `<p href="#" onclick="popup('filemanager')" style="font-size: 130px; float: left; cursor: pointer;" title="File Manager">📂</p>`
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
  //miliseconds only
}