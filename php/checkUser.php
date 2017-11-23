<?php
    header("Content-type:application/json;charset=utf-8");

    require_once("conn.php");

    $Output=[];
    $userName=$_GET['userName'];
    $sql="SELECT uname FROM user WHERE uname='{$userName}'";
    $result=$mysqli->query($sql);
    if($result->num_rows)
    {
        $Output['msg']='err';
    }
    else
    {
        $Output['msg']='succ';
    }
    echo json_encode($Output);

    $mysqli->close();
?>