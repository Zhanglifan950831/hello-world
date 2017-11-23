<?php
	header("Content-type:application/json;charset=utf-8");
	require_once('conn.php');
	$Output=[];

	$sql="INSERT INTO comment(content,sID,uName) values(?,?,?)";
	$stmt=$mysqli->prepare($sql);
	$stmt->bind_param('sis',$content,$sID,$uName);
	$sID=$_REQUEST['sID'];
	$content=$_REQUEST['comment'];
	$uName=$_REQUEST['uName'];
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

	$stmt->close();
	$mysqli->close();
?>