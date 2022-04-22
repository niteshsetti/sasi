const formd1=()=>{
    var snow = document.getElementById("snow").value;
    var dr1 = document.getElementById("dr1").value;
    var dr2 = document.getElementById("dr2").value;
    var  mkso= document.getElementById("mkso").value;
    var sasid1=document.getElementById("sasid1").value;
  
    if (snow == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter S.No',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (dr1 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter your Designation & Responsibility',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (dr2 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Max Score',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mkso == "") {
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
            "snow":snow,
            "dr1":dr1,
            "dr2":dr2,
            "mkso":mkso,
            "sasid1":sasid1
            },
            success:function(data)
            {

            }
        });
    }


}

const formd2=()=>{
    var dr3 = document.getElementById("dr3").value;
    var dr4 = document.getElementById("dr4").value;
    var mksc = document.getElementById("mksc").value;
    var sasid2=document.getElementById("sasid2").value;
  

    if (dr3 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select your Activity',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (dr4 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Max Marks',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mksc == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Marks Scored',
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
            "dr3":dr3,
            "dr4":dr4,
            "mksc":mksc,
            "sasid2":sasid2
            },
            success:function(data)
            {

            }
        });
    }
}