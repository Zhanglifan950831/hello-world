<?php
	header('Content-type:application/json;charset=utf-8');
	require_once('conn.php');
	
    $sID=$_GET['sID'];
	$sql="SELECT subject.sName,comment.content,comment.uName FROM subject INNER JOIN comment on subject.sid=comment.sID where comment.sID='{$sID}'";
	$result=$mysqli->query($sql);
	$all=$result->fetch_all(MYSQLI_ASSOC);
	echo json_encode($all);

	$mysqli->close();
?>