<?php

	require_once('conn.php');
	
	$sql='delete from test where name=?';
	$stmt=$mysqli->prepare($sql);
	$stmt->bind_param('s',$name)
	$name='a';
	$stmt->execute();

	$stmt->close();
	$mysqli->close();
?>