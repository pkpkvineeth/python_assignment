function validate()
{
    var name=document.getElementById("name").value;
    var date=document.getElementById("date").value;
    var mail=document.getElementById("mail").value;
    var user=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
    var copass=document.getElementById("copass").value;
    var districttag=document.getElementById("district");
    var district=districttag.options[districttag.selectedIndex].text;
    var radio=document.getElementsByName("gender");
    for(var i=0;i<radio.length;i++)
    {
        if(radio[i].type=="radio"&&radio[i].checked)
        {
            var val=radio[i].value;
        }
    }
    console.log("NAME: "+name+" DATE: "+date+" EMAIL: "+mail+" USER: "+user+" PASS: "+pass+" CONFIRM PASS: "+copass);
    console.log("DISTRICT: "+district)
    console.log("RADIO : "+val)
    alert("Submitted Successfully");
}