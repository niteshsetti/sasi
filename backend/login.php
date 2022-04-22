<?php
include 'db.php';
session_start();
if(isset($_POST["email"]) || isset($_POST["password"]))
{
    $email_check=$_POST["email"];
    $pass_check=md5($_POST["password"]);
    $sql_query="select *from details where Email='$email_check' and Password='$pass_check'";
    $sql_execute=mysqli_query($connection,$sql_query);
    $sql_fetch=mysqli_fetch_array($sql_execute);
    @$get_email=$sql_fetch['Email'];
    @$get_password=$sql_fetch['Password'];
    if(((strcmp($email_check,$get_email)==0) && (strcmp($pass_check,$get_password)==0)))
    {
        echo "Success";
        $_SESSION["email"]=$email_check;
        $_SESSION["sasiid"]=$sql_fetch["Sasiid"];
        $_SESSION["name"]=$sql_fetch["Name"];
    }
    else if($email_check == "admin@gmail.com" && $pass_check=="e6e061838856bf47e1de730719fb2609")
    {
        echo "Success";
        $_SESSION["email"]=$email_check;
    }
    else{
        echo "Failed";
    }

}
