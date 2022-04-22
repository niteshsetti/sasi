const formb=()=>{
    var cc = document.getElementById("cc").value;
    var cn = document.getElementById("cn").value;
    var bra = document.getElementById("bra").value;
    var year = document.getElementById("year").value;
    var sem = document.getElementById("sem").value;
    var sec = document.getElementById("sec").value;
    var nosp = document.getElementById("nosp").value;
    var nosd = document.getElementById("nosd").value;
    var per = document.getElementById("per").value;
    var ms = document.getElementById("ms").value;
    var sasiid4=document.getElementById("sasiid4").value;
    if (cc == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Course code',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (cn == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Cource name',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (bra == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Branch',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (year == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Year',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (sem == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Semester',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (sec == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Section',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (nosp == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter No of Sessions Planned',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (nosd == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter No of Sessions Delivered',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (per == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Percentage',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (ms == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Marks Scored',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        $.ajax({
            url:"../../backend/formb.php",
            method:"post",
            async:false,
            data:{
            "cc":cc,
            "cn":cn,
            "branch":bra,
            "year":year,
            "sem":sem,
            "sec":sec,
            "nosd":nosd,
            "nosp":nosp,
            "per":per,
            "ms":ms
            },
            success:function(data)
            {
                if(data === "Success")
                {
                    Swal.fire({
                        icon: 'success',
                        title: 'Good Good ',
                        text: 'Data Inserted Successfully',
                        confirmButtonColor: 'blue',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Data Failed to Insert',
                        confirmButtonColor: 'blue',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }
        });
    }
}

const formb2=()=>{

}

const formb3=()=>{
    var ccc = document.getElementById("ccc").value;
    var cnn = document.getElementById("cnn").value;
    var ry = document.getElementById("nco").value;
    var noc = document.getElementById("noc").value;
    var pera = document.getElementById("pera").value;
    var moo = document.getElementById("moo").value;
    var sasiid5 = document.getElementById("sasiid5").value;


    if (ccc == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Course Code',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (cnn == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Course Name',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (ry == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter No. of expected course outcomes',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (noc == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter No. of outcomes attained',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (pera == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Percentage Acheived',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (moo == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter the Marks Obtained',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        $.ajax({
            url:"../../backend/formb.php",
            method:"post",
            async:false,
            data:
            {
            "ccc":ccc,
            "cnn":cnn,
            "neoco":ry,
            "noc":noc,
            "pera":pera,
            "moo":moo
            },
            success:function(data)
            {
                if(data === "Success")
                {
                    Swal.fire({
                        icon: 'success',
                        title: 'Good Good ',
                        text: 'Data Inserted Successfully',
                        confirmButtonColor: 'blue',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Data Failed to Insert',
                        confirmButtonColor: 'blue',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }
        });
    }
}

const formb4=()=>{
    var sya = document.getElementById("sya").value;
    var cc2 = document.getElementById("cc2").value;
    var mo2 = document.getElementById("mo2").value;
    var sasiid6 = document.getElementById("sasiid6").value;

    if (sya == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Your Activity',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (cc2 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Course code',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mo2 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter the Marks Obtained',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        $.ajax({
            url:"",
            method:"post",
            async:false,
            data:{
            "sya":sya,
            "cc2":cc2,
            "mo2":mo2,
            "sasiid6":sasiid6
            },
            success:function(data)
            {

            }
        });
    }
}



const formb5=()=>{
    var sya1 = document.getElementById("sya1").value;
    var mo3 = document.getElementById("mo3").value;
    var sasiid7 = document.getElementById("sasiid7").value;


    if (sya1 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Your Activity',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mo3 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Marks Obtained',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        $.ajax({
            url:"",
            method:"post",
            async:false,
            data:{
            "sya1":sya1,
            "mo3":mo3,
            "sasiid7":sasiid7
            },
            success:function(data)
            {

            }
        });
    }
}

const formb6=()=>{
    var sya2 = document.getElementById("sya2").value;
    var mo4 = document.getElementById("mo4").value;
    var sasiid8 = document.getElementById("sasiid8").value;

    if (sya2 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Your Activity',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mo4 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Marks Obtained',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        $.ajax({
            url:"",
            method:"post",
            async:false,
            data:{
            "sya2":sya2,
            "mo4":mo4,
            "sasiid8":sasiid8
            },
            success:function(data)
            {

            }
        });
    }
}


const formb7=()=>{
    var sya3 = document.getElementById("sya3").value;
    var noht = document.getElementById("noht").value;
    var mo5 = document.getElementById("mo5").value;
    var sasiid9 = document.getElementById("sasiid9").value;


    if (sya3 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Your Activity',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (noht == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter No. of Hours Taken',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mo5 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Marks Obtained',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        $.ajax({
            url:"",
            method:"post",
            async:false,
            data:{
            "sya3":sya3,
            "noht":noht,
            "mo5":mo5,
            "sasiid9":sasiid9
            },
            success:function(data)
            {

            }
        });
    }
}


const formb8=()=>{
    var sya4 = document.getElementById("sya4").value;
    var mm1 = document.getElementById("mm1").value;
    var mo6 = document.getElementById("mo6").value;
    var sasiid10 = document.getElementById("sasiid10").value;


    if (sya4 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Your Activity',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mm1 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Maximum Marks',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mo6 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Marks Obtained',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        $.ajax({
            url:"",
            method:"post",
            async:false,
            data:{
            "sya4":sya4,
            "mm1":mm1,
            "mo6":mo6,
            "sasiid10":sasiid10
            },
            success:function(data)
            {

            }
        });
    }
}


const formb9=()=>{
    var cc3 = document.getElementById("cc3").value;
    var semis = document.getElementById("semis").value;
    var pofa = document.getElementById("pofa").value;
    var sasiid11 = document.getElementById("sasiid11").value;


    if (cc3 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter your Course Code',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (semis == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter the Semister',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (pofa == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter % of feedback Achieved',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        $.ajax({
            url:"",
            method:"post",
            async:false,
            data:{
            "cc3":cc3,
            "semis":semis,
            "pofa":pofa,
            "sasiid11":sasiid11
            },
            success:function(data)
            {

            }
        });
    }
}


const formb10=()=>{
    var cc4 = document.getElementById("cc4").value;
    var semis1 = document.getElementById("semis1").value;
    var pasp = document.getElementById("pasp").value;
    var sasiid12 = document.getElementById("sasiid12").value;


    if (cc4 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Course Code',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (semis1 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter the Semister',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (pasp == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Pass percentage',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        $.ajax({
            url:"",
            method:"post",
            async:false,
            data:{
            "cc4":cc4,
            "semis1":semis1,
            "pasp":pasp,
            "sasiid12":sasiid12
            },
            success:function(data)
            {

            }
        });
    }
}

const formb11=()=>{
    var sya5 = document.getElementById("sya5").value;
    var sya6 = document.getElementById("sya6").value;
    var mo7 = document.getElementById("mo7").value;
    var sasiid13 = document.getElementById("sasiid13").value;

    if (sya5 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Your Activity',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (sya6 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Your Activity',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mo7 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Marks Obtained',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        $.ajax({
            url:"",
            method:"post",
            async:false,
            data:{
            "sya5":sya5,
            "sya6":sya6,
            "mo7":mo7,
            "sasiid13":sasiid13
            },
            success:function(data)
            {

            }
        });
    }
}



const formb12=()=>{
    var sya7 = document.getElementById("sya7").value;
    var sya8 = document.getElementById("sya8").value;
    var mo8 = document.getElementById("mo8").value;
    var sasiid14 = document.getElementById("sasiid14").value;


    if (sya7 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'select your activity',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (sya8 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Your Activity',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mo8 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Marks Obtained',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        $.ajax({
            url:"",
            method:"post",
            async:false,
            data:{
            "sya7":sya7,
            "sya8":sya8,
            "mo8":mo8,
            "sasiid14":sasiid14
            },
            success:function(data)
            {

            }
        });
    }
}




const formb13=()=>{
    var sya9 = document.getElementById("sya9").value;
    var sya10 = document.getElementById("sya10").value;
    var mo9 = document.getElementById("mo9").value;
    var sasiid15 = document.getElementById("sasiid15").value;


    if (sya9 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'select your activity',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (sya10 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select your activity',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mo9 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Marks Obtained',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        $.ajax({
            url:"",
            method:"post",
            async:false,
            data:{
            "sya9":sya9,
            "sya10":sya10,
            "mo9":mo9,
            "sasiid15":sasiid15
            },
            success:function(data)
            {

            }
        });
    }
}

const formb14=()=>{
    var sya11 = document.getElementById("sya11").value;
    var sya12 = document.getElementById("sya12").value;
    var mo10 = document.getElementById("mo10").value;
    var sasiid16 = document.getElementById("sasiid16").value;


    if (sya11 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'select your activity',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (sya12 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Your Activity',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mo10 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Marks Obtained',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else{
        $.ajax({
            url:"",
            method:"post",
            async:false,
            data:{
            "sya11":sya11,
            "sya12":sya12,
            "mo10":mo10,
            "sasiid16":sasiid16
            },
            success:function(data)
            {

            }
        });
    }

}