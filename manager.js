/*var s = new URLSearchParams(location.search);
if ((s).has("100followers")){
  if ((s).get("100followers") === "weibo"){}
}*/
(function(){
  console.log("This Project was entirely Programmed in JavaScript and HTML and CSS");
  console.log("Project Name: MDA PC VM V1.0.0\nAuthor Name: Mr Discreet Animation#8833\nAuthor Email: mda@amogus.email mrdiscordanimation@gmail.com\nAuthor Website: https://mrdiscordanimations.web.app/")
}())
/*const config = {
  "administratordata": "sus"
}*/
/*Controlled Context Menu Enviroment*/
/*
//Below is the Default Enviroment for all!
window.addEventListener("contextmenu",function(event){
  event.preventDefault();
  var contextElement = document.getElementById("context-menu");
  contextElement.style.top = event.offsetY + "px";
  contextElement.style.left = event.offsetX + "px";
  contextElement.classList.add("active");
});
window.addEventListener("click",function(){
  document.getElementById("context-menu").classList.remove("active");
});
*/
//Operation Failed!
function ppfilepopup(event){
  event.preventDefault();
  var contextElement = document.getElementById("context-menu");
  contextElement.style.top = event.offsetY + "px";
  contextElement.style.left = event.offsetX + "px";
  contextElement.classList.add("active");
  document.getElementById("context-menu").classList.remove("active");
  window.addEventListener("click",function(){
    document.getElementById("context-menu").classList.remove("active");
  });
}
  
function mdarightclick(event){
  event.preventDefault();
  var contextElement = document.getElementById("context-menu");
  contextElement.style.top = event.offsetY + "px";
  contextElement.style.left = event.offsetX + "px";
  contextElement.classList.add("active");
}
/*Ends Here*/
/*Below is almost the Computer Scripts*/
function popup(events){
  var modal = document.getElementById("thingsModal");
  if (events === "settings"){
    document.getElementById("modalGUI").innerHTML=`
    <h1>Settings</h1>
    <a href="#" onclick="popup('reset')" style="color: black;">Reset to Factory Settings</a><br>
    <a href="#" onclick="popup('shutdown')" style="color: black;">Shut Down</a><br>
    <a href="#" onclick="location.href='https://mdaorgs.page.link/hehe'" style="color: black;">Easter Eggs</a><br>
    <p>Copyrighted By Mr Discord/Discreet Animations 2022.<br>Email: <a href="mailto:mda@amogus.email" style="color: black;">mda@amogus.email</a></p>
    `;
    modal.style.display = "block";
  }
  if (events === "notes"){
    document.getElementById("modalGUI").innerHTML=`
    <h1>Notes</h1>
    <p id="notesMSG"></p>
    <textarea name="notes" id="notepad" cols="40" rows="20" placeholder="Save your Notes here!">${localStorage.objectNOTES}</textarea>
    <button onclick="popup('saveNotes')">Save</button>
    `;
    modal.style.display = "block";
  }
  if (events === "reset"){
    localStorage.clear();
    window.close()
  }
  if (events === "shutdown"){
    window.close()
  }
  if (events === "pass10918"){
    document.getElementById("modalGUI").innerHTML=`
    <h1>Password Protected File</h1><br>
    <p>Enter The Password to Decrypt: <input type="password" id="decryptKEY"><button onclick="popup('decrypt10918')">Decrypt File</button></p>
    `
    modal.style.display = "block";
  }
  if (events === "decrypt10918"){
    //if (document.getElementById("decryptKEY").value === config.administratordata){
      if (document.getElementById("decryptKEY").value === "sus"){
      document.getElementById("modalGUI").innerHTML="<h1>Sussy Imposter caught in 10K Satelite HD Ultra Professional Pro Max Vision</h1><p>Don't hack kids.<br>Don't hack, kids.</p>"
      //modal.style.display = "none";
      //localStorage.usercache = JSON.stringify({key: config.administratordata, token: "sus"})
      //location.reload();
      var ppfile = document.getElementById("ppfile");
      ppfile.title = "MDA Confidential Files";
      ppfile.style = "font-size: 130px; float: left; cursor: pointer;";
      ppfile.innerText = "📁";
      popup('mdasusfiles')
    }
    else{
      alert("Wrong Password!");
      modal.style.display = "none";
    }
  }
  if (events === "SL_Web"){
    document.getElementById("modalGUI").innerHTML=`
    <h1>Sussy Land: Web Edition</h1><br>
    <p>Hold It! (Ace Attorney REF) We haven't published Sussy Land yet... Until we release it you can play it.</p>
    `
    modal.style.display = "block";
  }
  if (events === "saveNotes"){
    localStorage.objectNOTES = document.getElementById("notepad").value;
    document.getElementById("notesMSG").innerText = "Notes Saved."
  }
  if (events === "mdasusfiles"){
    document.getElementById("modalGUI").innerHTML=`
    <h1>MDA Confidential Files (DO NOT SHARE! FROM THE ORDERS OF THE <i>K19 Council</i>)</h1>
    <p>Hijacked Call Logs:</p>
    <p><b>Anonymous</b>: Give me the Exact Details NOW!</p>
    <p><i>Anonymous</i>: WHAT! ARE YOU OUT OF YOUR MIND???? WE CAN'T SHARE THE DETAILS OF THAT!!!!</p>
    `
  }
}