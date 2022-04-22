<?php
include 'db.php';
if (isset($_POST["name"]) || isset($_POST["des"]) || isset($_POST["dep"]) || isset($_POST["dob"]) || isset($_POST["doj"]) || isset($_POST["aos"]) || isset($_POST["phone"]) || isset($_POST["email"]) || isset($_POST["sasiid"])) {
    $name = $_POST["name"];
    $des = $_POST["des"];
    $dep = $_POST["dep"];
    $dob = $_POST["dob"];
    $doj = $_POST["doj"];
    $aos = $_POST["aos"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $sasiid= $_POST["sasiid"];

    $sql = "update details set Name='$name',Des='$des',Dep='$dep',DOB='$dob',DOJ='$doj',AOS='$aos',Phone='$phone',Email='$email' where Sasiid='$sasiid'";
    $execute_query = mysqli_query($connection, $sql);
    if ($execute_query) {
        echo "Success";
    } else {
        echo "Failed";
    }
}
