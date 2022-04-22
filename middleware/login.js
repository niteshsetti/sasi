const log = () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailpattern = /^\w+[a-zA-Z0-9\.-]+@([a-z])+(\.[a-z]{2,3})+$/g
    if (email == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Complete Email Field',
            confirmButtonColor: 'blue',
        })
    }
    else if (password == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Complete Password Field',
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
        $.ajax({
            url: "../backend/login.php",
            method: "post",
            async: false,
            data: {
                "email": email,
                "password": password
            },
            success: function (data) {
                if (data === "Success") {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Taking to DashBoard Please Wait...',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout(function(){
                        window.location.replace('../dashboard/template/sasiboard');
                    },2000);
                }
                if (data === "Failed") {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Invalid Credinals Found',
                        confirmButtonColor: 'blue',
                    })
                }
            }
        });
    }
}