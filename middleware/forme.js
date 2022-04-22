const forme1=()=>{
    var snow1 = document.getElementById("snow1").value;
    var drop1 = document.getElementById("drop1").value;
    var drop2 = document.getElementById("drop2").value;
    var sesa = document.getElementById("seas").value;
    var dta = document.getElementById("dta").value;
    var noa8 = document.getElementById("noa8").value;
    var  poa= document.getElementById("poa").value;
    var  hpd= document.getElementById("hpd").value;
    var sassid1=document.getElementById("sassid1").value;
  
    if (snow1 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter S.No',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (drop1 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Nature of Activity',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (drop2 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select max Score',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (sesa == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Self-Appraisal Score',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (dta == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Date & Time',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (noa8 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Date & Time',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (poa == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Date & Time',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (hpd == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Date & Time',
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
            "snow1":snow1,
            "drop1":drop1,
            "drop2":drop1,
            "sesa":sesa,
            "dta":dta,
            "noa8":noa8,
            "hpd":hpd,
            "sassid1":sassid1
            },
            success:function(data)
            {

            }
        });
    }


}


const forme2=()=>{
    var snow2 = document.getElementById("snow2").value;
    var dro1 = document.getElementById("dro1").value;
    var noeven = document.getElementById("noeven").value;
    var dro2 = document.getElementById("dro2").value;
    var sea1 = document.getElementById("sea1").value;
    var sassid2 = document.getElementById("sassid2").value;


    if (snow2 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter S.No',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (dro1 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select an Activity',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (noeven == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select no. of events',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (dro2 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Max Score',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (sea1 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Self - Appraisal Score',
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
            "snow2":snow2,
            "dro1":dro1,
            "noeven":noeven,
            "dro2":dro2,
            "sea1":sea1,
            "sassid2":sassid2
            },
            success:function(data)
            {

            }
        });
    }
}

const forme3=()=>{
    var smtm = document.getElementById("smtm").value;
    var tesa = document.getElementById("tesa").value;
    var asoa = document.getElementById("asoa").value;
    var facs = document.getElementById("facs").value;
    var sodh = document.getElementById("sodh").value;
    var sohod = document.getElementById("sohod").value;

    if (smtm == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Max Total Marks For All Categories',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (tesa == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Total Employee Self Appraisal Score',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (asoa == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Average Score of all Concerned after Verification',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (facs == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Faculty Sign:',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (sodh == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Sign of Deputy HOD(s)Name:',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (sohod == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Sign of HOD(s)Name:',
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
            "smtm":smtm,
            "tesa":tesa,
            "asoa":asoa,
            "facs":facs,
            "sodh":sodh,
            "sohod":sohod,
            "sassid3":sassid3
            },
            success:function(data)
            {

            }
        });
    }

}