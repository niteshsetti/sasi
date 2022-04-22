const qualifications = () => {
    var degree = document.getElementById("deg").value;
    var university = document.getElementById("uni").value;
    var college = document.getElementById("coll").value;
    var state = document.getElementById("state").value;
    var clas = document.getElementById("clas").value;
    var yop = document.getElementById("yop").value;
    var sasiid=document.getElementById("sasiid1").value;
    if(degree == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Degree',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(university == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your University',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(college == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your College',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(state == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your State',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(clas == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Class',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(yop == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your University',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        $.ajax({
            url:"../../backend/qualification.php",
            method:"post",
            async:false,
            data:{
                "deg":degree,
                "uni":university,
                "coll":college,
                "state":state,
                "clas":clas,
                "yop":yop,
                "sasiid":sasiid
            },
            success:function(data)
            {
                if(data === "Success")
                {
                    Swal.fire({
                        icon: 'success',
                        title: 'Good Job',
                        text: 'Record Inserted Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout(function(){
                        window.location.replace('sasiboard');
                    },2000);
                }
            }
        });
    }

}
const training = () => {
    var pf = document.getElementById("pf").value;
    var pt = document.getElementById("pt").value;
    var tpot = document.getElementById("tpot").value;
    var nop = document.getElementById("nop").value;
    var ini = document.getElementById("ini").value;
    var Remarks = document.getElementById("Remarks").value;
    var sasiid2=document.getElementById("sasiid2").value;
    if(pf == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Period From',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(pt == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Period To',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(tpot == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Total Period of Training',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(nop == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Nature of Program',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(ini == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Institution',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(Remarks == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Remarks',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        $.ajax({
            url:"../../backend/qualification.php",
            method:"post",
            async:false,
            data:{
                "pf":pf,
                "pt":pt,
                "tpot":tpot,
                "nop":nop,
                "ini":ini,
                "remarks":Remarks,
                "sasiid2":sasiid2
            },
            success:function(data)
            {
                if(data === "Success")
                {
                    Swal.fire({
                        icon: 'success',
                        title: 'Good Job',
                        text: 'Record Inserted Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout(function(){
                        window.location.replace('sasiboard');
                    },2000);
                }
            }
        });
    }

}

const teaching = () => {
    var pf = document.getElementById("ph").value;
    var pt = document.getElementById("status").value;
    var tpot = document.getElementById("df").value;
    var nop = document.getElementById("dt").value;
    var ini = document.getElementById("noy").value;
    var Remarks = document.getElementById("nou").value;
    var sasiid3=document.getElementById("sasiid3").value;
    if(pf == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Period From',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(pt == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Period To',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(tpot == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Total Period of Training',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(nop == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Nature of Program',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(ini == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Institution',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if(Remarks == "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Remarks',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        $.ajax({
            url:"../../backend/qualification.php",
            method:"post",
            async:false,
            data:{
                "pf1":pf,
                "pt1":pt,
                "tpot1":tpot,
                "nop1":nop,
                "ini1":ini,
                "remarks1":Remarks,
                "sasiid3":sasiid3
            },
            success:function(data)
            {
                if(data === "Success")
                {
                    Swal.fire({
                        icon: 'success',
                        title: 'Good Job',
                        text: 'Record Inserted Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout(function(){
                        window.location.replace('sasiboard');
                    },2000);
                }
            }
        });
    }

}