(function(){
  console.log("This Project was entirely Programmed in JavaScript and HTML and CSS");
  console.log("Project Name: MDA PC VM V1.0.0\nAuthor Name: Mr Discreet Animation#8833\nAuthor Email: mda@amogus.email mrdiscordanimation@gmail.com\nAuthor Website: https://mrdiscordanimations.web.app/")
}())
function mdaPC() {
    let popup;
    popup = window.open('', '', `top=0,left=${screen.width-800},width=850,height=${screen.height}`);
    if(!popup || !popup.document || !popup.document.write) return alert('Popup blocked! Please allow popups and after you do so, rerun the code');
    
    window.dispatchEvent(new Event('beforeunload'));

    popup.document.write(`
    <!--Coded by: Mr Discreet Animation#8833 Author Email: mda@amogus.email-->
    <!DOCTYPE html>
    <html>
        <head>
            <title>MDA Virtual Machine</title>
            <script src="./manager.js"></script>
            <style>
                body {
                    font-family: sans-serif;
                }
                
                code {
                    background: lightgray;
                    font-family: Consolas, serif;
                    padding: 7.5px;
                    border-radius: 7.5px;
                    margin-right: 5px;
                }
    
                .warning {
                    background: yellow;
                    border: 5px solid red;
                    padding: 7.5px;
                    margin-top: 40px;
                }
                button {
                    padding: 6px;
                }
                .noselect {
                    -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    -o-user-select: none;
                    user-select: none;
                }
                /*MDA Codes*/
                .navbar {
        overflow: hidden;
        background-color: none;
      }
            </style>
        </head>
        <body>
          <!--GUI Panel-->
          <!--
          <link href="./guipanel.css" rel="stylesheet" type="text/css" />
          <div id="context-menu">
            <p style="color:white; cursor: default">MDAScripts Protector</p>
            <p style="color: white; cursor: default">You have been halted to Inspect this File! For Security Reasons.</p>
          </div> 
        -->
          <!--END OF PANEL-->
            <h3>Project: MDA PC Virtual Machine (WEB) Version: 1.0.0<br>Welcome Back! Currently Logged In as: <i>Administrator</i></h3>
            <hr>
            <div class="navbar">
            <a href="#" onclick="popup('settings')" style="float: left;" title="Settings"><img src="./settings.png" alt="setting_icon"></a>
            <p onclick="popup('notes')" style="font-size: 120px; float: right; cursor: pointer;" title="Notepad">📝</p>
            <p href="#" onclick="popup('pass10918')" style="font-size: 130px; float: left; cursor: default;" title="Password Protected File" id="ppfile">🔒</p>
            <a href="#" onclick="popup('SL_Web')" style="float: right;" title="Sussy Land Web Edition"><img src="./MDATimes.png" alt="mdatimes_icon" width="120px" height="120px"></a>
            </div>
    <!-- The Modal -->
    <div id="thingsModal" class="thinkmodal">
        <div class="modal-content">
          <span class="close" onclick="modalExit()">&times;</span>
          <div id="modalGUI"></div>
      </div>
        </div>
      
      </div>
      <script>
      var modal = document.getElementById("thingsModal");
      function modalDisplay() {
        modal.style.display = "block";
      }
      function modalExit() {
        modal.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      </script>
      <style>
    .thinkmodal {font-family: Arial, Helvetica, sans-serif;}
    
    /* The Modal (background) */
    .thinkmodal {
      display: none; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      padding-top: 100px; /* Location of the box */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }
    
    /* Modal Content */
    .modal-content {
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
    }
    
    /* The Close Button */
    .close {
      color: #aaaaaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    
    .close:hover,
    .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
      </style>
        </body>
    <!--
      DA MDA SIGNATURE
         __   __      ___           ____
        /  / / /     /   \         /   /
       /  /_/ /     /     |       /___/
      /      /_    /      |      /   /__
    _/            /______/    __/
    
    Digital Signature K19Council
    -->
    </html>
    `)

}		