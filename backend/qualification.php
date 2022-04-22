<?php
include 'db.php';
if(isset($_POST["deg"]) || isset($_POST["uni"]) || isset($_POST["coll"]) || isset($_POST["state"]) || isset($_POST["clas"]) || isset($_POST["yop"]) || isset($_POST["sasiid"]))
{
    $degree=$_POST["deg"];
    $university=$_POST["uni"];
    $college=$_POST["coll"];
    $state=$_POST["state"];
    $clas=$_POST["clas"];
    $yop=$_POST["yop"];
    $sasiid=$_POST["sasiid"];
    $param="QUALI".uniqid();
    $sql_insert="insert into qualifications(Deg,University,College,State,Clas,Yop,Sasiid,Param)values('$degree','$university'
    ,'$college','$state','$clas','$yop','$sasiid','$param'
    )";
    $execute=mysqli_query($connection,$sql_insert);
    if($execute)
    {
        echo "Success";
    }
    else{
        echo "Failed";
    }
}


if(isset($_POST["pf1"]) || isset($_POST["pt1"]) || isset($_POST["tpot1"]) || isset($_POST["nop1"]) || isset($_POST["ini1"]) || isset($_POST["remarks1"]) || isset($_POST["sasiid3"]))
{
    $pf=$_POST["pf1"];
    $pt=$_POST["pt1"];
    $tpot=$_POST["tpot1"];
    $nop=$_POST["nop1"];
    $ini=$_POST["ini1"];
    $remarks=$_POST["remarks1"];
    $sasiid=$_POST["sasiid3"];
    $param="Teaching".uniqid();
    $sql_insert="insert into teaching(Pheld,Status,Df,Dt,Fraction,Insti,Sasiid,Param)values('$pf','$pt'
    ,'$tpot','$nop','$ini','$remarks','$sasiid','$param'
    )";
    $execute=mysqli_query($connection,$sql_insert);
    if($execute)
    {
        echo "Success";
    }
    else{
        echo "Failed";
    }
}

if(isset($_POST["pf"]) || isset($_POST["pt"]) || isset($_POST["tpot"]) || isset($_POST["nop"]) || isset($_POST["ini"]) || isset($_POST["remarks"]) || isset($_POST["sasiid2"]))
{
    $pf=$_POST["pf"];
    $pt=$_POST["pt"];
    $tpot=$_POST["tpot"];
    $nop=$_POST["nop"];
    $ini=$_POST["ini"];
    $remarks=$_POST["remarks"];
    $sasiid=$_POST["sasiid2"];
    $param="Training".uniqid();
    $sql_insert="insert into training(Pfrom,Pto,Tper,Nop,Institution,Remarks,Sasiid,Param)values('$pf','$pt'
    ,'$tpot','$nop','$ini','$remarks','$sasiid','$param'
    )";
    $execute=mysqli_query($connection,$sql_insert);
    if($execute)
    {
        echo "Success";
    }
    else{
        echo "Failed";
    }
}
