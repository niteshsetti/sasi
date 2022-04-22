function getinvitations() {
    $(document).ready(function () {
        getinvitations();
        $.ajax({
            url: "../../backend/dashcount.php",
            method: "post",
            async: false,
            data: {
                "ei": 1
            },
            success: function (data) {
                $("#msg").html(data);
            }
        });
    });
}
function getemps() {
    $(document).ready(function () {
        getemps();
        $.ajax({
            url: "../../backend/dashcount.php",
            method: "post",
            async: false,
            data: {
                "Er": 1
            },
            success: function (data) {
                $("#msg1").html(data);
            }
        });
    });
}
function getmails() {
    $(document).ready(function () {
        getmails();
        $.ajax({
            url: "../../backend/dashcount.php",
            method: "post",
            async: false,
            data: {
                "ms": 1
            },
            success: function (data) {
                $("#msg2").html(data);
            }
        });
    });
}
getinvitations();
getemps();
getmails();