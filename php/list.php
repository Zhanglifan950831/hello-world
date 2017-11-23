<?php
	header('Content-type:application/json;charset=utf-8');
	require_once('conn.php');
	
	$sql="SELECT * FROM subject order by time desc";
	$result=$mysqli->query($sql);
	$all=$result->fetch_all(MYSQLI_ASSOC);
	echo json_encode($all);

	$mysqli->close();
?>