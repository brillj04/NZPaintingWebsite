
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


/*===============JSON=======================*/
//Retrieving data:
function loadXMLdoc(){
text = localStorage.getItem("ProductsPaintings.json");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;
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

