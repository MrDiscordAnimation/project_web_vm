(function(){
    //WARNING TRIGGER THIS IF YOU'RE THE DEVELOPER ONLY!
    //OR IF YOU KNOW WHAT YOU'RE DOING!
    const d = new Date();
    d.setTime(d.getTime() + (1*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = "dev" + "=" + "enabled" + ";" + expires + ";path=/";
    location.reload();
}())