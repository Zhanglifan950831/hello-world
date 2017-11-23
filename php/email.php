<?php
    header("Content-type:text/plain;charset=utf-8");
    if(isset($_POST['email']))
    {
        $to="895556085@qq.com";
        $subject=$_POST['subject'];
        $message=$_POST['message'];
        $email=$_POST['email'];
        mail($to, $subject, $message,"From:".$email);
        echo 1;
    }
    else
    {
        echo 0;
    }
?>