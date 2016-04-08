<?php

	session_start();


if (isset($_REQUEST['update_document_content']) && (!empty($_REQUEST['update_document_content']))):

	$_SESSION['document-content'] = $_REQUEST['update_document_content'];
	
	$_SESSION['document-width'] = $_REQUEST['update_document_width'];
	
	$_SESSION['document-title'] = $_REQUEST['update_document_title'];
	
endif;

if (isset($_REQUEST['reset_document_content']) && ($_REQUEST['reset_document_content'] == 1))
	$_SESSION['document-content'] = '';


?>