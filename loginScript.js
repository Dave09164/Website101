function visible_ad() {
	var adVisibility = document.getElementById("ad_sec"), adBody = document.getElementById("ad_body");
	
	if (adVisibility.style.display === "block") {
		adVisibility.style.display = "none";
		adBody.style.display = "none";
	} else {
		adVisibility.style.display = "block";
		adBody.style.display = "block";
	}
}

function checkFrom() {
    var check = document.getElementById("details_form");

	if ((check.firstname.value.length <= 0) || (check.lastname.value.length <= 0) || (check.emaddress.value.length <= 0)) {
		check.sub_button.disabled = true;
	} else { check.sub_button.disabled = false; }
}
function getInfo() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
		myFunction(xhttp);
		}
	};
	xhttp.open("GET", "user.xml", true);
	xhttp.send();
}
function myFunction(xml) {
	var i;
	var xmlDoc = xml.responseXML;
    var table="<tr><th>Name</th><th>Email</th></tr>";
	var x = xmlDoc.getElementsByTagName("info");
	
	for (i = 0; i <x.length; i++) {
		table += "<tr><td>" +
		x[i].getElementsByTagName("Fname")[0].childNodes[0].nodeValue + " " +
		x[i].getElementsByTagName("Sname")[0].childNodes[0].nodeValue +
		"</td><td>" +
		x[i].getElementsByTagName("mail")[0].childNodes[0].nodeValue +
		"</td></tr>";
	}
	document.getElementById("users").innerHTML = table;
 }