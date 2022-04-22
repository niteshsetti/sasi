<?php
include 'db.php';
if(isset($_POST["ei"]))
{
   
    $sql="select *from invitation";
    $execute=mysqli_query($connection,$sql);
    $count=mysqli_num_rows($execute);
    echo $count;
}
if(isset($_POST["Er"]))
{
    $sql_details="select *from details";
    $execute_details=mysqli_query($connection,$sql_details);
    $count_emp=mysqli_num_rows($execute_details);
    echo $count_emp;
}
if(isset($_POST["ms"]))
{
   
    $sql="select *from invitation";
    $execute=mysqli_query($connection,$sql);
    $count=mysqli_num_rows($execute);
    echo $count;
}
?>