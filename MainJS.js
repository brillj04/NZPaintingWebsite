function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "ProductsPaintings.xml", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>TITLE</th><th>CATEGORY</th></tr>";
  var x = xmlDoc.getElementsByTagName("PAINTING");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}



$(document).ready(function(){
	$.ajax({
	
        type: "GET",
	url: "ProductsPaintings.xml",
	dataType: "xml",
        success: xmlParser
	
        }); 
   });

function xmlParser(xml) {
	$(xml).find("PAINTING").each(function(){
	     $('#productDisplay').append('<div class="PAINTING"><img src="Images/' + 
	       $(this).find("IMAGE").text() + '" width="200" height="225" alt="' +
		 $(this).find("TITLE").text() + '"/><br/><div class="TITLE">' + 
		  $(this).find("TITLE").text() + '<br/>$' +
		    $(this).find("CATEGORY").text() + '</div></div>');
		     $(".PAINTING").fadeIn(1000);
	});
	
}

/*=============Membership form validation==============================*/
function submitForm() {
    var fName = document.forms["myForm"]["fname"].value;
	var lName = document.forms["myForm"]["lname"].value;
	var emailAdd = document.forms["myForm"]["email"].value;
	 if(fName.length < 5)
	{
		alert("Please make sure the entered name is atleast 5 letters long");
        return false;
	}
	else if(lName.length < 8)
	{
		alert("Please make sure the entered surname is atleast 8 letters long");
        return false;
	}
 	 else
 	{
	    alert("Your membership signup form was sent!");
		return true;
	} 
   
}

