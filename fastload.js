function preloader(){
favicon = new Image();
favicon.src = "https://mrdiscordanimations.web.app/favicon.ico";
settings = new Image()
settings.src ="./settings.png"
MDATimes = new Image()
MDATimes.src ="./MDATimes.png"
}
/*
Full Source Code:
https://javabeat.net/javascript-preload-images/
Full HTMl
<!DOCTYPE html>
<head>
<TITLE>Example- preloading of images</TITLE>
<script language = "JavaScript">
function preloader()
{
heavyImage = new Image();
heavyImage.src = "image.jpg";
}
</script>
</head>
<body onLoad="javascript:preloader()">
<a href="#" onMouseOver="javascript:document.image.src=’image.jpg’">
<img name="img01" src="image.jpg"></a>
</body>
</html>
*/