function WhatToLearnMethod()
{
    alert("clicked");
    document.getElementById("DivisionId").style="display:block";
    var Topicslist=["FrontEndTechnologies","C#","MVC","Build2Applications"];
    var options="";

    Topicslist.map((val,id)=>{ 
        options += `<option value="${val}" id="${id}"> ${val} </option>`;
    });
    document.getElementById("ListOfTopicsSelect").innerHTML=options;
    
}

