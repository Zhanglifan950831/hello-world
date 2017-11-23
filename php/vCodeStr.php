<?php
    header("Content-type:text/plain;charset=utf-8");
    session_start();
    echo strtolower($_SESSION['code']);
?>