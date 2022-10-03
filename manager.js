(function(){
  const config={"startuptext1":`This Project was entirely Programmed in JavaScript and HTML and CSS`,"startuptext2":`Project Name: MDA PC Revision v1.0.3\nAuthor Name: Mr Discreet Animation#8833\nAuthor Email: mda@amogus.email mrdiscordanimation@gmail.com\nAuthor Website: https://mrdiscordanimations.web.app/`,"startuptext3":`You may Modify, Remix or Do anything else `}
  console.log('%cSystem Monitor: Loading Startup Text...\nSystem Monitor: Wrote to Console:\n"','background: black; color: green;')
  console.log("%c"+config.startuptext1,"background: #eee");
  console.log("%c"+config.startuptext2,"background: #eee");
  console.log("%c"+config.startuptext3,"background: #eee");
  console.log('%c"\nSystem Monitor: End of Writing to Console.','background: black; color: green;')
  console.log("%cWARNING! PASTING ANY CODE OR OBFUSCATED JavaScript WILL LEAK YOUR CREDENTIALS TO THE HACKER/ATTACKER","background: black; color: red;")
}())
/*Below is almost the Computer Scripts*/
//Add Color to JavaScript: https://stackoverflow.com/questions/7505623/colors-in-javascript-console
/*Example:
console.log('%cStr1'+'%cStr2','CSS-FOR_STR1','CSS-FOR_STR2');

Another Example:

console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
*/
function popup(events){
  var modal = document.getElementById("thingsModal");
  if (events === "settings"){
    document.getElementById("modalGUI").innerHTML=`
    <h1>Settings</h1>
    <a href="#" onclick="popup('reset')" style="color: black;">Reset to Factory Settings</a><br>
    <a href="#" onclick="popup('shutdown')" style="color: black;">Shut Down</a><br>
    <a href="#" onclick="location.href='https://mdaorgs.page.link/hehe'" style="color: black;">Easter Eggs</a><br>
    <hr>
    <h3>System Information</h3>
    <p>
    Running: <i>MDALigmaOS</i><br>
    Source Code: <a href="https://github.com/MrDiscordAnimation/project_web_vm" style="color: blue;">github.com/MrDiscordAnimation/project_web_vm</a><br>

    </p>
    <hr>
    <p>Copyrighted By Mr Discord/Discreet Animations 2022.<br>Email: <a href="mailto:mda@amogus.email" style="color: black;">mda@amogus.email</a></p>
    `;
    modal.style.display = "block";
    console.log("%cSystem Monitor: User Opened Settings", "background: black; color: green;");
  }
  else if (events === "notes"){
    document.getElementById("modalGUI").innerHTML=`
    <h1>Notes</h1>
    <p id="notesMSG"></p>
    <textarea name="notes" id="notepad" cols="40" rows="20" placeholder="Save your Notes here!">${localStorage.objectNOTES}</textarea>
    <button onclick="popup('saveNotes')">Save</button>
    `;
    modal.style.display = "block";
    console.log("%cSystem Monitor: User Opened Notes", "background: black; color: green;");
  }
  else if (events === "reset"){
    localStorage.clear();
    alert("Resetted this Computer!")
    window.close();
    console.log("%cSystem Monitor: Initated System Reset!", "background: black; color: red;");
  }
  else if (events === "shutdown"){
    window.close();
    console.log("%cSystem Monitor: Initated System Shutdown!", "background: black; color: red;");
  }
  else if (events === "pass10918"){
    document.getElementById("modalGUI").innerHTML=`
    <h1>Password Protected File</h1><br>
    <p>Enter The Password to Decrypt: <input type="password" id="decryptKEY"><button onclick="popup('decrypt10918')">Decrypt File</button></p>
    `
    modal.style.display = "block";
    console.log("%cSystem Monitor: Password Prompt for Folder 10918.\nSystem Monitor: Secure Folder. Forked By MDA. (This is a Joke and is not forked nor copied from Samsung)", "background: black; color: yellow;");
  }
  else if (events === "decrypt10918"){
    //if (document.getElementById("decryptKEY").value === config.administratordata){
      if (document.getElementById("decryptKEY").value === "sus"){
      document.getElementById("modalGUI").innerHTML="<h1>Sussy Imposter caught in 10K Satelite HD Ultra Professional Pro Max Vision</h1><p>Don't hack kids.<br>Don't hack, kids.</p>"
      //modal.style.display = "none";
      //localStorage.usercache = JSON.stringify({key: config.administratordata, token: "sus"})
      //location.reload();
      console.log("%cSystem Monitor: Hacking Go Brrrr..", "background: black; color: blue;");
      var ppfile = document.getElementById("ppfile");
      ppfile.title = "MDA Confidential Files";
      ppfile.style = "font-size: 130px; float: left; cursor: pointer;";
      ppfile.innerText = "📁";
      popup('mdasusfiles')
    }
    else{
      alert("Wrong Password!");
      modal.style.display = "none";
      console.log("%cSystem Monitor: Password Incorrect!", "background: black; color: red;");
    }
  }
  else if (events === "SL_Web"){
    document.getElementById("modalGUI").innerHTML=`
    <h1>Sussy Land: Web Edition</h1><br>
    <p>Click the Button to Open Sussy Land: Rise of the Dead Man</p>
    <button onclick="popup('launchSL')" disabled="">Launch Game</button>
    <p>We have Disabled it because we're haven't completed added the Game in here yet...</p>
    `
    modal.style.display = "block";
    console.log("%cSystem Monitor: User Opened Sussy Land Folder", "background: black; color: green;");
  }
  else if (events === "saveNotes"){
    localStorage.objectNOTES = document.getElementById("notepad").value;
    document.getElementById("notesMSG").innerText = "Notes Saved."
    console.log("%cSystem Monitor: User Saved/Edit Notes.", "background: black; color: green;");
  }
  else if (events === "mdasusfiles"){
    document.getElementById("modalGUI").innerHTML=`
    <h1>MDA Confidential Files (DO NOT SHARE! FROM THE ORDERS OF THE <i>K19 Council</i>)</h1>
    <p>Hijacked Call Logs:</p>
    <p><b>Anonymous</b>: Give me the Exact Details NOW!</p>
    <p><i>Anonymous</i>: WHAT! ARE YOU OUT OF YOUR MIND???? WE CAN'T SHARE THE DETAILS OF THAT!!!!</p>
    `
    console.log("%cSystem Monitor: ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nAnonymous: Don't even try fucking with us.\nK19 Council: How tf did you managed to break the fourth wall.", "background: black; color: yellow;");
  }
  else if (events === "filemanager"){
    document.getElementById("modalGUI").innerHTML=`
    <h1>File Manager</h1>
    <p>
    File Name | Created Date | Additional Info<br> 
    <i onclick="popup('settings')" class="hype">settings.exe | 01.01.1992 | Settings</i><br>
    <i onclick="popup('SL_Web')" class="hype">sussy_land.lnk | <b style="color: blue;">null</b> | Sussy Land Shortcut</i><br>
    <i onclick="popup('notes')" class="hype">notepad.exe | 01.01.1992 | Notes</i><br>
    <i>encryption.mda | <b style="color: blue;">null</b> | The Official Encryption Method using mda files</i><br>
    <i>decryption.mda | <b style="color: blue;">null</b> | The Official Decryption Method using mda files</i><br>
    <i>commandline.mda | <b style="color: blue;">null</b> | The Command Line used to execute code</i><br>
    <i onclick="popup('audioFolder')" class="hype">audio.exe | 01.01.1992 | Audio Management System</i><br>
    <i>system.exe | 01.01.1992 | System Controller</i><br>
    <i onclick="popup('filemanager')" class="hype">filemanager.exe | 01.01.1992 | File Manager</i>
    </p>
    `
    modal.style.display = "block";
    console.log("%cSystem Monitor: User Opened File Manager","background: black; color: green;")
  }
  else if (events === "launchSL"){
    console.log("%cSussy Land Processor [ADMIN]: Changing Enviroment...","background: pink; color: white;");
    console.log("%cSussy Land Processor [ADMIN]: Fast Load Set to: True","background: pink; color: white;");
    //Below Code is added to Prevent Tampering
    console.log("%cSussy Land Processor [ADMIN]: Killed Enviroment. Info Code: 11037","background: pink; color: red;")
    document.getElementById("errMSG").innerHTML=`
    <h1>Sussy Land Boot System. Error Code: <i>SL_TemperedFiles</i> Error ID: <i>11037</i></h1>
    <p>Hi. Our Systems have detected that you (THE USER) are trying to get ahold of Sussy Land: Web Edition. I have so many questions just like why? Like Why? You can play the Game here: <a href="https://mrdiscordanimations.itch.io/">https://mrdiscordanimations.itch.io</a><br><br>
    Please Listen to the Message Below:<br>
    <audio controls src="./SL/SL%20Web%20Edition%20Temper.m4a"></audio><br>
    Captions:
    <i>
    This is Mr Discreet Animation.<br>
    You have been charged of Data Tempering with our Files of Sussy Land: Web Edition.<br>
    This Message has been Broadcasted to you to the Website of Project Web VM or MDA PC VM or anything that contains PC in the name or something.<br>
    Anyways, you have been charged of Tempering with our files.<br>
    Yes, I know that you used F12 and just to do all this Thing.<br>
    So, please do not try this again because you do not want to hear this Message again or I might as well log your IP Address or do something with it.<br>
    Yeah, I might as well as ban your IP Address.<br>
    Thank you for Listening.<br>
    </i>
    </p>
    `;
    err.style.display="block";
    console.log("%cSussy Land Processor [ADMIN]: User Tempered Files for Sussy Land: Web Edition","background: pink; color: red;");
    console.log("%cOh yeah if you're the User who's been tempering our files. I will make sure that your IP will be logged and banned from our Website.","background: black; color: #eee;")
  
  }
  //Reserved for Audio Player.
  else if (events === "audioFolder"){
    document.getElementById("modalGUI").innerHTML=``;
    modal.style.display = "block";
    console.log("%cSystem Monitor: User Opened Audio Player","background: black; color: green;")
  }
//System Code:
  else if (events === "machineCheck"){
    /*
    if (localStorage.vm === "SL"){
      var s = new URLSearchParams(location.search);
      if ((s).has("sl")){
        SL("loadWhereLeftOff")
      }
      else return location.href='?sl';
  }
  else if (localStorage.vm === "default") return;
  //else return document.write(`<h1>Hmm</h1><p>Very Sus Indeed...<br>Seems Like Someone Messed around with the System Configurations.<br>It's Corrupted. Contact your Administrator.</p>`)
  else {localStorage.vm="default"; location.reload()}
  */
 //Disabled due to Security Flaws Reasoning.
}
else {
  document.getElementById("errMSG").innerHTML=`
  <h1>System Command Error. Error Code: <i>SM:UC_Event-${events}</i></h1>
  <p>Hi. This is the Computer System Speaking because we think that the files were corrupted or is having an Error.<br><br>
  Try:<br><br>
  <a href="https://github.com/MrDiscordAnimation/project_web_vm" style="color: blue;">Reinstalling/Use the Official Files. Github: https://github.com/MrDiscordAnimation/project_web_vm</a><br><br>
  Contacting Our Support Discord Server or the Person who made this Mod.<br><br>
  If none of the above works. Try Twitter and Posting the Issue there and Ping: @MDAYTOfficial or Send us a Email Address: <a href="mailto:mda@amogus.email" style="color: blue;">mda@amogus.email</a>
  Error Code: <b>SM:UC_Event-${events}</b>
  </p>
  `;
  err.style.display="block";
  console.log("%cSystem Monitor: Unknown Command! Error Code: SM:UC_Events-"+events,"background: black; color: red;");
}
}
//Save Sussy Land Code For Later.
function SL(info){
if (info==="loadWhereLeftOff"){
  console.log("%cSussy Land Processor [ADMIN]: Load Where Left Off","background: pink; color: white;")
  //XSS Vulnerability
  document.getElementById("blank").innerHTML=localStorage.SL;
}
if (info==="fillINFO"){
  console.log("%cSussy Land Processor [ADMIN]: Loaded Information Filler","background: pink; color: white;")
  document.write(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Sussy Land</title>
      <link rel="stylesheet" href="./SL.css" type="text/css">
      <script src="./manager.js"></script>
    </head>
    <body>
      <center>
  <h1>Sussy Land ~ The Game!</h1><br>
  <a href="#" onclick="SL('exitQuit')" style="color: blue;">Exit Game</a><br>
  <a href="#" onclick="SL('saveQuit')" style="color: blue;">Save & Quit (Upon Starting it will load).</a><br>
  <p>Name your Character:</p><br>
  <input type="text" id="name"><br>
  <p>Name your Own Gender!</p><br>
  <input type="text" id="gender"><br>
  <p>Pronouns: Example: He/She/They</p><br>
  <input type="text" id="Pronoun"><br>
  <p>Pronouns: Example: His/Her/Them</p><br>
  <input type="text" id="pronoun"><br>
  <button onclick="SL('saveInfo')">Play Now!</button>
        <hr>
      </center>
    </body>
  </html>`)
}
if (info==="saveInfo"){
  var doc1 = document.getElementById("name").value;
  var doc2 = document.getElementById("gender").value;
  var doc3 = document.getElementById("Pronoun").value;
  var doc4 = document.getElementById("pronoun").value;
  localStorage.userData = JSON.stringify({name: doc1, gender: doc2, pronoun: doc3, pronouns: doc4, settings: "MDABruhBruh", key: 1997});
  location.reload();
}
else{
  console.error("%cSussy Land Processor [ADMIN]: Failed to Load Command "+info+" because it was not in the List.","background: pink; color: red;")
}
}