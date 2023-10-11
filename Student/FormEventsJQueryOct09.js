jQuery(function () {
    $("#usernameid").on("change", function () {
        let username = $(this).val();

        // alert("username is change");
        if (username.length <6 ) {
            $("#usernameerror").text("Username must be in between 6 to 8 chars").css("color", "red");
        }
        else {

            $("#usernameerror").text("Valid username").css("color", "green");
        }
    });

    $("#passwordid").on("keyup",function(){

        let passwordvalue=$(this).val();
        if(passwordvalue.length <6)
        {
            $("#pwderror").text("Password must be greater than 6 length").css("color","red");
        }
        else {

            $("#pwderror").text("Valid password").css("color", "green");
        }

    });

    $("#reasonid").on("focus",function(){
        let reasontexterror=$(this).val();
        if(reasontexterror=='')
        {
            $("#reasonerror").text("Reason must be entered to get login from on focus").css("color","red");
        }
        else {

            $("#reasonerror").text("reason is entered.").css("color", "green");
        }

    });

    $("#reasonid").on("blur",function(){
        let reasontexterror=$(this).val();
        if(reasontexterror=='')
        {
            $("#reasonerror").text("Reason must be entered to get login from on blur").css("color","red");
        }
        else {

            $("#reasonerror").text("reason is entered on blur.").css("color", "green");
        }

    });

    $("#formid").on("submit",function(event){
        let usernameval=$("#usernameid").val();
        let reasonval=$("#reasonid").val();
        let roleval=$("#roleid").val();

        let formval=`<label><b> Username: </b>${usernameval}</label><br>
        <label><b> Reason for Login: </b>${reasonval}</label><br>
        <label><b> RoleId: </b>${roleval}</label><br>
        `;

        $("#formid").html(formval);

        //from stopping form from submission
        event.preventDefault();
    });

});
