<?php
	$errorLine = $_POST['errorLine'];
	$errorMessage = $_POST['errorMessage'];
	$location = $_POST['location'];
	$fh = fopen($_SERVER['DOCUMENT_ROOT'] . '/logs/js-errors.txt', 'a+');
	fwrite($fh, " $location : $errorLine at $errorMessage \n\r");
	fclose($fh);
	echo $_POST['errorLine'] . ' ' . $_POST['errorMessage'] . ' ' . $_POST['location'];
