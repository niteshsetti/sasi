const update = () => {
    var deg = document.getElementById("updeg").value;
    var uni = document.getElementById("upuni").value;
    var coll = document.getElementById("upcoll").value;
    var stat = document.getElementById("upstat").value;
    var clas = document.getElementById("upclas").value;
    var yop = document.getElementById("upyop").value;
    var par = document.getElementById("quapar").value;
    if (deg == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Degree',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (uni == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Designation',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (coll == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Your Department',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (stat == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Pick Your Date of Birth',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (clas == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Your Date of Joining',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (yop == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Area of Specialization',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else {
        $.ajax({
            url: "../../backend/updateall.php",
            method: "post",
            async: false,
            data: {
                "deg": deg,
                "uni": uni,
                "coll": coll,
                "state": stat,
                "clas": clas,
                "yop": yop,
                "quapar": par
            },
            success: function (data) {
                if (data === "Success") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Good Job',
                        text: 'Information Updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout(function () {
                        window.location.replace('sasiboard');
                    }, 2000);
                }

            }
        })
    }
}

const del = (record) => {
    $.ajax({
        url: "../../backend/updateall.php",
        method: "post",
        async: false,
        data: {
            "quadel": record
        },
        success: function (data) {
            if (data === "Success") {
                Swal.fire({
                    icon: 'success',
                    title: 'Good Job',
                    text: 'Deletion Success',
                    showConfirmButton: false,
                    timer: 1500
                })
                setTimeout(function () {
                    window.location.replace('sasiboard');
                }, 2000);
            }

        }
    })
}

const updatetraining = () => {
    var deg = document.getElementById("updeg").value;
    var uni = document.getElementById("upuni").value;
    var coll = document.getElementById("upcoll").value;
    var stat = document.getElementById("upstat").value;
    var clas = document.getElementById("upclas").value;
    var yop = document.getElementById("upyop").value;
    var par = document.getElementById("quapar").value;
    if (deg == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Degree',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (uni == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Designation',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (coll == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Your Department',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (stat == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Pick Your Date of Birth',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (clas == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Your Date of Joining',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (yop == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Area of Specialization',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else {
        $.ajax({
            url: "../../backend/updateall.php",
            method: "post",
            async: false,
            data: {
                "deg1": deg,
                "uni1": uni,
                "coll1": coll,
                "state1": stat,
                "clas1": clas,
                "yop1": yop,
                "quapar1": par
            },
            success: function (data) {
                if (data === "Success") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Good Job',
                        text: 'Information Updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout("location.reload(true);");
                }

            }
        })
    }
}

const del1 = (record) => {
    $.ajax({
        url: "../../backend/updateall.php",
        method: "post",
        async: false,
        data: {
            "quadel1": record
        },
        success: function (data) {
            if (data === "Success") {
                Swal.fire({
                    icon: 'success',
                    title: 'Good Job',
                    text: 'Deletion Success',
                    showConfirmButton: false,
                    timer: 1500
                })
                setTimeout(function () {
                    window.location.replace('sasiboard');
                }, 2000);
            }

        }
    })
}

const updateteaching = () => {
    var deg = document.getElementById("updeg").value;
    var uni = document.getElementById("upuni").value;
    var coll = document.getElementById("upcoll").value;
    var stat = document.getElementById("upstat").value;
    var clas = document.getElementById("upclas").value;
    var yop = document.getElementById("upyop").value;
    var par = document.getElementById("quapar").value;
    if (deg == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Degree',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (uni == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Your Designation',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (coll == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Your Department',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (stat == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Pick Your Date of Birth',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (clas == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Your Date of Joining',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else if (yop == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select Area of Specialization',
            confirmButtonColor: 'blue',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else {
        $.ajax({
            url: "../../backend/updateall.php",
            method: "post",
            async: false,
            data: {
                "deg2": deg,
                "uni2": uni,
                "coll2": coll,
                "state2": stat,
                "clas2": clas,
                "yop2": yop,
                "quapar2": par
            },
            success: function (data) {
                if (data === "Success") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Good Job',
                        text: 'Information Updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout("location.reload(true);");
                }

            }
        })
    }
}

const del2 = (record) => {
    $.ajax({
        url: "../../backend/updateall.php",
        method: "post",
        async: false,
        data: {
            "quadel2": record
        },
        success: function (data) {
            if (data === "Success") {
                Swal.fire({
                    icon: 'success',
                    title: 'Good Job',
                    text: 'Deletion Success',
                    showConfirmButton: false,
                    timer: 1500
                })
                setTimeout(function () {
                    window.location.replace('sasiboard');
                }, 2000);
            }

        }
    })
}