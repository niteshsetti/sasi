const send = () => {
    var email = document.getElementById("email").value;
    var emailpattern = /^\w+[a-zA-Z0-9\.-]+@([a-z])+(\.[a-z]{2,3})+$/g
    if (email == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Employee Email to Send Invitation',
            confirmButtonColor: 'blue',
        })
    }
    else if (emailpattern.test(email) == false) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid Email Address Found !!',
        })

    }
    else {
        document.getElementById("sends").disabled = true;
        $.ajax({
            url: "../../backend/mail.php",
            method: "post",
            async: false,
            data: {
                "email": email
            },
            success: function (data) {
                if (data === "Success") {
                   $("#msg").text("Invitation Mailed Successfully");
                   setTimeout(function(){
                       window.location.replace("inviteemp")
                    $("#msg").text("");
                   },2000);
                }
                if(data === "DE")
                {
                    $("#msg").text("Mail Already Pushed");
                    setTimeout(function(){
                        window.location.replace("inviteemp")
                     $("#msg").text("");
                    },2000);
                }
            }
        });
    }
}