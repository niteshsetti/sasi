<?php
include 'db.php';
if (isset($_POST["email"])) {
    $email = $_POST["email"];
    $our_email = "nitesh.setti2001@gmail.com";
    $to = $email;
    $from = $our_email;
    $subject = "Invitation from Sasi Apprisial";
    $message = 'This is the Invitation Email from Sasi Apprisial Complete all the Required Fields and Activate Your Account By
following this Link.
<html>
<body>
<a href="http://localhost/sasiapprisal/dashboard/template/invite">Click Here!!!</a>
</body>
</html>';
    $headers  = "From: $from\r\n";
    $headers .= "Content-type: text/html\r\n";
    $email_check = "select *from invitation where Email='$email'";
    $dup_execute = mysqli_query($connection, $email_check);
    $count_dup = mysqli_num_rows($dup_execute);
    if ($count_dup > 0) {
        echo "DE";
    } else {
        $mail = mail($to, $subject, $message, $headers);
        if ($mail) {
            $sql = "insert into invitation(Email)values('$email')";
            $sql_check = mysqli_query($connection, $sql);
            if ($sql_check) {
                echo "Success";
            } else {
                echo "Failed";
            }
        } else {
            echo "Failed";
        }
    }
}
