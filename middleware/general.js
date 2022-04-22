const sub= () => {
    var name=document.getElementById("name").value;
    var des=document.getElementById("des").value;
    var dep=document.getElementById("dep").value;
    var dob=document.getElementById("dob").value;
    var doj=document.getElementById("doj").value;
    var aos=document.getElementById("aos").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var cpassword=document.getElementById("cpassword").value;
    var emailpattern = /^\w+[a-zA-Z0-9\.-]+@([a-z])+(\.[a-z]{2,3})+$/g
    var mobilepattern = /^\d{10}$/g
    if(name == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your name',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(des == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Designation',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(dep == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Your Department',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(dob == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Pick Your Date of Birth',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(doj == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Your Date of Joining',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(aos == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Area of Specialization',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(phone == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Phonenumber',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(email == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Email',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(password == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Password',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(cpassword == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Confirm Your Password',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (emailpattern.test(email) == false) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid Email Address Found !!',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mobilepattern.test(phone) == false) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid Mobile number Found !!',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(password!=cpassword)
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Passwords Not Match !!',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        $.ajax({
            url:"../../backend/general.php",
            method:"post",
            async:false,
            data:{
                "name":name,
                "des":des,
                "dep":dep,
                "dob":dob,
                "doj":doj,
                "aos":aos,
                "phone":phone,
                "email":email,
                "password":password
            },
            success:function(data)
            {
                if(data === "Success")
                {
                    Swal.fire({
                        icon: 'success',
                        title: 'Good Job',
                        text: 'Account Activated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout(function(){
                        window.location.href='http://localhost/sasiapprisal/frontend/index';
                    },2000);
                }
                if(data === "DE")
                {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops',
                        text: 'Duplicate Email-ID Found',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                if(data === "DM")
                {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops',
                        text: 'Duplicate Mobile number Found',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            }
        })
    }
}