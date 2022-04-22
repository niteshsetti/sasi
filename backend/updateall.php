<?php
include 'db.php';
if (isset($_POST["deg"]) || isset($_POST["uni"]) || isset($_POST["coll"]) || isset($_POST["state"]) || isset($_POST["clas"]) || isset($_POST["yop"]) || isset($_POST["quapar"])) {
    $degree = $_POST["deg"];
    $university = $_POST["uni"];
    $college = $_POST["coll"];
    $state = $_POST["state"];
    $clas = $_POST["clas"];
    $yop = $_POST["yop"];
    $quaid = $_POST["quapar"];
    $sql_update = "update qualifications set Deg='$degree',University='$university',College='$college',State='$state',
    Clas='$clas',Yop='$yop' where Param='$quaid'";
    $execute = mysqli_query($connection, $sql_update);
    if ($execute) {
        echo "Success";
    } else {
        echo "Failed";
    }
}
if (isset($_POST["quadel"])) {
    $quadel = $_POST["quadel"];
    $sql_delete = "delete from qualifications where Param='$quadel'";
    $sql_ex = mysqli_query($connection, $sql_delete);
    if ($sql_ex) {
        echo "Success";
    } else {
        echo "Failed";
    }
}
if (isset($_POST["deg1"]) || isset($_POST["uni1"]) || isset($_POST["coll1"]) || isset($_POST["state1"]) || isset($_POST["clas1"]) || isset($_POST["yop1"]) || isset($_POST["quapar1"])) {
    $degree = $_POST["deg1"];
    $university = $_POST["uni1"];
    $college = $_POST["coll1"];
    $state = $_POST["state1"];
    $clas = $_POST["clas1"];
    $yop = $_POST["yop1"];
    $quaid = $_POST["quapar1"];
    $sql_update = "update training set Pfrom='$degree',Pto='$university',Tper='$college',Nop='$state',
    Institution='$clas',Remarks='$yop' where Param='$quaid'";
    $execute = mysqli_query($connection, $sql_update);
    if ($execute) {
        echo "Success";
    } else {
        echo "Failed";
    }
}
if (isset($_POST["quadel1"])) {
    $quadel = $_POST["quadel1"];
    $sql_delete = "delete from training where Param='$quadel'";
    $sql_ex = mysqli_query($connection, $sql_delete);
    if ($sql_ex) {
        echo "Success";
    } else {
        echo "Failed";
    }
}
if (isset($_POST["deg2"]) || isset($_POST["uni2"]) || isset($_POST["coll2"]) || isset($_POST["state2"]) || isset($_POST["clas2"]) || isset($_POST["yop2"]) || isset($_POST["quapar2"])) {
    $degree = $_POST["deg2"];
    $university = $_POST["uni2"];
    $college = $_POST["coll2"];
    $state = $_POST["state2"];
    $clas = $_POST["clas2"];
    $yop = $_POST["yop2"];
    $quaid = $_POST["quapar2"];
    $sql_update = "update teaching set Pheld='$degree',Status='$university',Df='$college',Dt='$state',
    Fraction='$clas',Insti='$yop' where Param='$quaid'";
    $execute = mysqli_query($connection, $sql_update);
    if ($execute) {
        echo "Success";
    } else {
        echo "Failed";
    }
}

if (isset($_POST["quadel2"])) {
    $quadel = $_POST["quadel2"];
    $sql_delete = "delete from teaching where Param='$quadel'";
    $sql_ex = mysqli_query($connection, $sql_delete);
    if ($sql_ex) {
        echo "Success";
    } else {
        echo "Failed";
    }
}