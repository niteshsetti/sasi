const formc1=()=>{
    var top = document.getElementById("top").value;
    var top1 = document.getElementById("top1").value;
    var numb = document.getElementById("numb").value;
    var maob = document.getElementById("maob").value;
    var sasiid1=document.getElementById("sasiid1").value;
  
    if (top == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Nature of Activity',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (top1 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Marks',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (numb == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter number',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (maob == "") {
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
            "top":top,
            "top1":top1,
            "numb":numb,
            "maob":maob,
            "sasiid1":sasiid1
            },
            success:function(data)
            {

            }
        });
    }


}


const formc2=()=>{
    var noa = document.getElementById("a2").value;
    var nopp = document.getElementById("b2").value;
    var mspp = document.getElementById("c2").value;
    var mar1 = document.getElementById("d2").value;
    var sasiid2 = document.getElementById("e2").value;


    if (noa == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Nature of Activity Research Publications (Journals)',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (nopp == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter No. of papers Published',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mspp == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Max Score per Publications',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mar1 == "") {
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
            "noa":noa,
            "nopp":nopp,
            "mspp":mspp,
            "mar1":mar1,
            "sasiid2":sasiid2
            },
            success:function(data)
            {

            }
        });
    }


}

const formc3=()=>{

    var rpj = document.getElementById("rpj").value;
    var mfpe = document.getElementById("mfpe").value;
    var mar2 = document.getElementById("mar2").value;
    var sasiid3 = document.getElementById("sasiid3").value;


    if (rpj == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Research Publications (Journals) No. of citations in the assessing period h- index i10 index',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mfpe == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Marks 5 per each cross citation - upto Max. 150 marks 5 per each i10 index marks',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mar2 == "") {
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
            "rpj":rpj,
            "mfpe":mfpe,
            "mar2":mar2,
            "sasiid3":sasiid3
            },
            success:function(data)
            {

            }
        });
    }
}

const formc4=()=>{
    var topp1 = document.getElementById("topp1").value;
    var np = document.getElementById("np").value;
    var mppo1 = document.getElementById("mppo1").value;
    var mar3 = document.getElementById("mar3").value;
    var sasiid4 = document.getElementById("sasiid4").value;


    if (topp1 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Type of Publications ',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (np == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter No. Published',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mppo1 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Marks per Publication',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mar3 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Marks Acheived',
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
            "topp1":topp1,
            "np":np,
            "mppo1":mppo1,
            "sasiid4":sasiid4
            },
            success:function(data)
            {

            }
        });
    }
}
const formc5=()=>{
    var top2 = document.getElementById("top2").value;
    var nop2 = document.getElementById("nop2").value;
    var top3 = document.getElementById("top3").value;
    var mar4 = document.getElementById("mar4").value;
    var sasiid4 = document.getElementById("sasiid4").value;

    if (top2 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Type of Project ',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (nop2 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter No of Projects',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (top3 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select score per Project ',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mar4 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Marks Acheived',
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
            "top2":top2,
            "nop2":nop2,
            "top3":top3,
            "mar4":mar4,
            "sasiid5":sasiid5
            },
            success:function(data)
            {

            }
        });
    }
}
const formc6=()=>{
    var top4 = document.getElementById("top4").value;
    var nop3 = document.getElementById("nop3").value;
    var mpp = document.getElementById("mpp").value;
    var mar5 = document.getElementById("mar5").value;
    var sasiid6 = document.getElementById("sasiid6").value;


    if (top4 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Type of Project ',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (nop3 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter No. Of Projects',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mpp == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Marks per project ',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mar5 == "") {
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
            "top4":top4,
            "nop3":nop3,
            "mpp":mpp,
            "mar5":mar5,
            "sasiid6":sasiid6
            },
            success:function(data)
            {

            }
        });
    }
}
const formc7=()=>{
    var top5 = document.getElementById("top5").value;
    var nop4 = document.getElementById("nop4").value;
    var mpp1 = document.getElementById("mpp1").value;
    var mar6 = document.getElementById("mar6").value;
    var sasiid7 = document.getElementById("sasiid7").value;



    if (top5 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Type of Patents',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (nop4 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter No. Of Patents',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mpp1 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Marks Per Patents ',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mar6 == "") {
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
            "top5":top5,
            "nop4":nop4,
            "mpp1":mpp1,
            "mar6":mar6,
            "sasiid7":sasiid7
            },
            success:function(data)
            {

            }
        });
    }
}

const formc8=()=>{
    var top6 = document.getElementById("top6").value;
    var dan = document.getElementById("dan").value;
    var ng = document.getElementById("ng").value;
    var mpp2 = document.getElementById("mpp2").value;
    var mar7 = document.getElementById("mar7").value;
    var sasiid8 = document.getElementById("sasiid8").value;



    if (top6 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select type of project',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (dan == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Degree awarded No.',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (ng == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select No. Guided ',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mpp2 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Marks per Project',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mar7 == "") {
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
            "top6":top6,
            "dan":dan,
            "ng":ng,
            "mpp2":mpp2,
            "mar7":mar7,
            "sasiid8":sasiid8
            },
            success:function(data)
            {

            }
        });
    }
}

const formc9=()=>{
    var top7 = document.getElementById("top77").value;
    var noa1 = document.getElementById("noa17").value;
    var top8 = document.getElementById("top87").value;
    var mar8 = document.getElementById("mar87").value;
    var sasiid9 = document.getElementById("sasiid97").value;


    if (top7 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select type of awards',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (noa1 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter No. of awards',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (top8 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select marks per award',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mar8 == "") {
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
            "top7":top7,
            "noa1":noa1,
            "top8":top8,
            "mar8":mar8,
            "sasiid9":sasiid9
            },
            success:function(data)
            {

            }
        });
    }
}

const formc10=()=>{
    var top9 = document.getElementById("a").value;
    var top10 = document.getElementById("b").value;
    var mar9 = document.getElementById("c").value;
    var sasiid10 = document.getElementById("d").value;


    if (top9 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Type of Achievement',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (top10 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select marks per acheivement',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mar9 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Mark Obtained',
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
            "top9":top9,
            "top10":top10,
            "mar9":mar9,
            "sasiid10":sasiid10
            },
            success:function(data)
            {

            }
        });
    }
}

const formc11=()=>{
    var top11 = document.getElementById("a1").value;
    var na4 = document.getElementById("b1").value;
    var top12= document.getElementById("c1").value;
    var mar9 = document.getElementById("d1").value;
    var sasiid11 = document.getElementById("e1").value;

    
    if (top11 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select your activity',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (na4 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter No. Activities',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (top12 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Max Marks',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (mar9 == "") {
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
            "top11":top11,
            "na4":na4,
            "top12":top12,
            "mar10":mar10,
            "sasiid11":sasiid11
            },
            success:function(data)
            {

            }
        });
    }
}