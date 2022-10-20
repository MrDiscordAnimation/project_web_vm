(function(){
    //WARNING TRIGGER THIS IF YOU'RE THE DEVELOPER ONLY!
    //OR IF YOU KNOW WHAT YOU'RE DOING!
    const config = {
        //CHANGE THIS TO enabled IF YOU WANT TO ACTIVATE DEV MODE
        "DEV_MODE": "disabled",
        //Change MDA to anyname you want
        "DEV_NAME": "MDA"
    }
    const d = new Date();
    d.setTime(d.getTime() + (1*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = "dev" + "=" + config.DEV_MODE + ";" + expires + ";path=/";
    localStorage.DEVUser=config.DEV_NAME;
    location.reload();
}())