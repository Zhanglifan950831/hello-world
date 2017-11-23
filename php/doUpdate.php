<?php
	
	require_once('conn.php');
	
	$sql='update test set name=?';
	$stmt=$mysqli->prepare($sql);
	$stmt->bind_param('s',$name)
	$name='a';
	$stmt->execute();

	$stmt->close();
	$mysqli->close();
?>