function UserIsOnFocusOnPassword(e)
{
    var str= "Password must contain 1-9 numbers,special char,one Caps letter";
    document.getElementById("rulesDisplay").innerText=str;
   //document.write(str);
}
function DisplayInput(e)
{
    var FirstName="FirstName:" + document.getElementById("firstname").value;
    const LastName="LastName:" +document.getElementById("lastname").value;
    const PassWord="Password:" +document.getElementById("password").value;
    const MembershipType="MembershipType" +document.getElementById("membershiptype").value;
    
    // Display the input values    
    document.getElementById("outputfirstname").innerText=FirstName;
    document.getElementById("outputlastname").innerText=LastName;
    document.getElementById("outputpassword").innerText=PassWord;
    document.getElementById("membershiptype").innerText=MembershipType;
}