
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
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

