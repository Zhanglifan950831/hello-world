<?php
    header("Content-type:application/json;charset=utf-8");

    require_once("conn.php");

    $Output=[];
    $userName=$_POST['userName'];
    $pwd=md5($_POST['pwd']);
    $email=$_POST['email'];
    $sql='INSERT INTO user(uname,upwd,email) VALUES(?,?,?)';
    $stmt=$mysqli->prepare($sql);
    $stmt->bind_param('sss',$userName,$pwd,$email);
    $stmt->execute();
    if(!$stmt->error)
    {
        $Output['msg']='succ';
    }
    else
    {
        $Output['msg']='err';
    }
    echo json_encode($Output);

    $mysqli->close();
?>