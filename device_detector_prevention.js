(function(){
    console.log("This Project was entirely Programmed in JavaScript and HTML and CSS");
    console.log("Project Name: MDA PC VM V1.0.0\nAuthor Name: Mr Discreet Animation#8833\nAuthor Email: mda@amogus.email mrdiscordanimation@gmail.com\nAuthor Website: https://mrdiscordanimations.web.app/")
  }())
var uagent = navigator.userAgent.toLowerCase();
function onloadKEY(){
if (uagent.search("iphone") > -1){
   console.log("iPhone\nType: " + uagent)
   document.getElementById("titler").innerHTML=`Access to this Directory is Denied!`;
   document.getElementById("descriptioner").innerHTML=(`This Virtual Machine is so hardcore that it might crash your Device!<br>Is this an error? Contact Our Support: <a href="mailto:mrdiscordanimation@gmail.com">mrdiscordanimation@gmail.com</a>`)
   
}
/*
else if (uagent.search("ipad") > -1){
    console.log("iPad\nType: " + uagent)
document.getElementById("titler").innerHTML=`Access to this Directory is Denied!`;
document.getElementById("descriptioner").innerHTML=(`This Virtual Machine is so hardcore that it might crash your Device!<br>Is this an error? Contact Our Support: <a href="mailto:mrdiscordanimation@gmail.com">mrdiscordanimation@gmail.com</a>`)

}
*/
else if (uagent.search("android") > -1){
   console.log("Android\nType: " + uagent)
   document.getElementById("titler").innerHTML=`Access to this Directory is Denied!`;
   document.getElementById("descriptioner").innerHTML=(`This Virtual Machine is so hardcore that it might crash your Device!<br>Is this an error? Contact Our Support: <a href="mailto:mrdiscordanimation@gmail.com">mrdiscordanimation@gmail.com</a>`)
   
}
else if (uagent.search("windows") > -1){
    console.log("Windows\nType: " + uagent)
    document.getElementById("titler").innerHTML="Redirecting to your Destination Shortly...";
    document.getElementById("descriptioner").innerHTML="";
    location.replace("./session.html")
    
}
else if (uagent.search("mac") > -1){
    console.log("Mac\nType: " + uagent)
    document.getElementById("titler").innerHTML="Redirecting to your Destination Shortly...";
    document.getElementById("descriptioner").innerHTML="";
    location.replace("./session.html")
    
}
else if (uagent.search("linux") > -1){
    console.log("Haha! Get Wrecked! University of Minnisota for 'Fixed Bugs but added MEGA Bugs' for 'Testing Purposes'\nLinux\nType: " + uagent)
    document.getElementById("titler").innerHTML="Redirecting to your Destination Shortly...";
    document.getElementById("descriptioner").innerHTML="";
    location.replace("./session.html")
    
}
else{
  console.log('We currently do not know this User Agent so we will Halt it!\nType: ' + uagent);
  document.getElementById("titler").innerHTML=`Access to this Directory is Denied!`;
  document.getElementById("descriptioner").innerHTML=(`This Virtual Machine is so hardcore that it might crash your Device!<br>Is this an error? Contact Our Support: <a href="mailto:mrdiscordanimation@gmail.com">mrdiscordanimation@gmail.com</a>`)  
}
}

function agenter(ligma){
    if (ligma === "denied"){
    }
    else if (ligma === "granted"){
    }
    else{
        console.log("You tried hacking but failed!")
    }
}
