<?php
include '../backend/db.php';
if(isset($_POST["cc"]) || isset($_POST["cn"]) || isset($_POST["branch"])||
isset($_POST["year"]) ||isset($_POST["sem"]) || isset($_POST["sec"]) || isset($_POST["nosd"])
|| isset($_POST["nosp"]) || isset($_POST["per"]) || isset($_POST["ms"]))
{
   $a=$_POST["cc"];
   $b=$_POST["cn"];
   $c=$_POST["branch"];
   $d=$_POST["year"];
   $e=$_POST["sem"];
   $f=$_POST["sec"];
   $g=$_POST["nosd"];
   $h=$_POST["nosp"];
   $i=$_POST["per"];
   $j=$_POST["ms"];

   $sql="insert into teachinglearningevaluation(CC,CN,Bran,Yea,Semi,Sec,Nosp,Nosd,Per,MS)values('$a','$b','$c','$d','$e','$f','$g','$h',$i,$j)";
   $execute=mysqli_query($connection,$sql);
   if($execute)
   {
    echo "Success";
   }
   else{
       echo "Failed";
   }
}
/* Attainment of Course outcomes ( to be filled in consultation with course co-ordinator & Professor Incharge-Academics)*/
if(isset($_POST["ccc"]) || isset($_POST["cnn"]) || isset($_POST["neoco"])||isset($_POST["noc"]) ||isset($_POST["pera"]) || isset($_POST["moo"]))
{
   $a1=$_POST["ccc"];
   $b1=$_POST["cnn"];
   $c1=$_POST["neoco"];
   $d1=$_POST["noc"];
   $e1=$_POST["pera"];
   $f1=$_POST["moo"];
   $sql1="insert into atainment(cc,cn,eco,oa,per,mo)values('$a1','$b1','$c1','$d1','$e1','$f1')";
   $execute1=mysqli_query($connection,$sql1);
   if($execute1)
   {
    echo "Success";
   }
   else
   {
       echo "Failed";
   }
}
?>