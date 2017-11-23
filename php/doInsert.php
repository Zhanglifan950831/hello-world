<?php
	header("Content-type:application/json;charset=utf-8");
	require_once('conn.php');
	$Output=[];

	$sql='insert into subject(sName,time) values(?,?)';
	$stmt=$mysqli->prepare($sql);
	$stmt->bind_param('si',$sName,$time);
	$sName=$_REQUEST['subject'];
	$time=time()*1000;
	$stmt->execute();
	$sID=$stmt->insert_id;
	if($sID!=0)
	{
		$Output['msg']='err';
	}

	$sql="INSERT INTO comment(content,sID,uName) values(?,?,?)";
	$stmt=$mysqli->prepare($sql);
	$stmt->bind_param('sis',$content,$sID,$uName);
	$content=$_REQUEST['content'];
	$uName=$_REQUEST['uName'];
	$stmt->execute();
	if(!$stmt->error)
	{
		$Output['msg']='succ';
		$Output['sID']=$stmt->insert_id;
	}
	else
	{
		$Output['msg']='err';
	}
	echo json_encode($Output);

	$stmt->close();
	$mysqli->close();
?>