<?php
	$serverName=SAE_MYSQL_HOST_M;
	$dbUser=SAE_MYSQL_USER;
	$dbPwd=SAE_MYSQL_PASS;
	$dbName=SAE_MYSQL_DB;
	$mysqli=new mysqli($serverName,$dbUser,$dbPwd,$dbName, SAE_MYSQL_PORT);

	if($mysqli->connect_error)
	{
		die('数据库连接错误!'.$mysqli->connect_error);
	}

	$mysqli->query('set names utf8');
?>