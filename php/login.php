<?php
    header("Content-type:application/json;charset=utf-8");

    require_once('conn.php');

    $Output=[];

    $userName=$_GET['userName'];
    $pwd=md5($_GET['pwd']);
    $sql="SELECT uname FROM user WHERE uname=? AND upwd=?";
    $stmt=$mysqli->prepare($sql);
    $stmt->bind_param('ss',$userName,$pwd);
    $stmt->execute();
    $stmt->bind_result($uname);
    if($stmt->fetch())
    {
        $Output['msg']='succ';
        $Output['userName']=$uname;
    }
    else
    {
        $Output['msg']='err';
    }
    echo json_encode($Output);
    $stmt->close();
    $mysqli->close();
?>