const genupdate=() => {
    var name=document.getElementById("upname").value;
    var des=document.getElementById("updes").value;
    var dep=document.getElementById("updep").value;
    var dob=document.getElementById("updob").value;
    var doj=document.getElementById("updoj").value;
    var aos=document.getElementById("upaos").value;
    var phone=document.getElementById("upphone").value;
    var email=document.getElementById("upemail").value;
    var sasiid=document.getElementById("sasiid").value;
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
    else{
        $.ajax({
            url:"../../backend/updategen.php",
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
                "sasiid":sasiid
            },
            success:function(data)
            {
                if(data === "Success")
                {
                    Swal.fire({
                        icon: 'success',
                        title: 'Good Job',
                        text: 'Information Updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout(function(){
                        window.location.replace('sasiboard');
                    },2000);
                }

            }
        })
    }
}