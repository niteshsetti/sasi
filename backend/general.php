<?php
include 'db.php';
if (isset($_POST["name"]) || isset($_POST["des"]) || isset($_POST["dep"]) || isset($_POST["dob"]) || isset($_POST["doj"]) || isset($_POST["aos"]) || isset($_POST["phone"]) || isset($_POST["email"]) || isset($_POST["password"])) {
    $name = $_POST["name"];
    $des = $_POST["des"];
    $dep = $_POST["dep"];
    $dob = $_POST["dob"];
    $doj = $_POST["doj"];
    $aos = $_POST["aos"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $password = md5($_POST["password"]);
    $random_id = "SASI" . uniqid();

    $dup_email = "select *from details where Email='$email'";
    $dup_email_execute = mysqli_query($connection, $dup_email);
    $count_dup_email = mysqli_num_rows($dup_email_execute);

    $dup_mobile = "select *from details where Phone='$phone'";
    $dup_mobile_execute = mysqli_query($connection, $dup_mobile);
    $count_dup_mobile = mysqli_num_rows($dup_mobile_execute);

    if ($count_dup_email > 0) {
        echo "DE";
    } else if ($count_dup_mobile > 0) {
        echo "DM";
    } else {
        $sql = "insert into details(Name,Des,Dep,DOB,DOJ,AOS,Phone,Email,Password,Sasiid)values('$name'
    ,'$des','$dep','$dob','$doj','$aos','$phone','$email','$password','$random_id')";
        $execute_query = mysqli_query($connection, $sql);
        if ($execute_query) {
            echo "Success";
        } else {
            echo "Failed";
        }
    }
}
