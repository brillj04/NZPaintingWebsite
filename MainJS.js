/*=============Ajax technique+==============================*/
 var xmlHttp = createXmlHttpRequestObeject();
 
 //create object
 function createXmlHttpRequestObeject(){
	 var xmlHttp;
	 if(window.XMLHttpRequest){
		xmlHttp = new XMLHttpRequest();
	 }else{
		 xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	 }
	 return xmlHttp;
 }
 
 //call onload
 
 function process(){
	if(xmlHttp){
		try{
			xmlHttp.open("GET", "ProductsPaintings.xml", true);
			xmlHttp.onreadystatechange = handleStateChange;
			xmlHttp.send(null);
		}catch(e){
			alert(e.toString());
		}
	}
 }

 //when state changes
 function handleStateChange(){
	 if(xmlHttp.readyState==4){
		if(xmlHttp.status==200){
			try{
				handleResponse();
			}catch(e){
				alert(e.toString());
			}
		}else{
			alert(xmlHttp.statusText);
		}
	 }
 }
 
 //handle the respnse from the server
 
 function handleRespone(){
	 var xmlResponse = xmlHttp.responseXML;
	 root = xmlResponse.documentElement;
	 titles = root.getElementsByTagName("TITLE");
	 catergory = root.getElementsByTagName("CATEGORY");
	 
	 var stuff="";
	 for(var i=0; i<titles.length; i++){
		
	 }

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