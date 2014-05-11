function bob () {
var myvar = getURLParameter("correct");
	if (myvar == 0) 
		document.getElementById('Error').innerHTML="Incorrect username or password";
	else
		showHint();
		alert("HEY IM HERE");
	}

	function getURLParameter(name) {
		return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
	}

	

	
	function showHint()  {
		var xmlhttp=new XMLHttpRequest();
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				document.getElementById("Error").innerHTML=xmlhttp.responseText;
			}
		}
		var string = "PHP/login.php";
		xmlhttp.open("GET",string, true); // ADD NAME AND ALL CREDIENTIALS
		xmlhttp.send();
	}