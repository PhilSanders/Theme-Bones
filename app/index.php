<?php
/*
  WP _Themebox by Netfunkdesign
*/

session_start();

if (!isset($_SESSION['username']) && !isset($_SESSION['document-width']) && !isset($_SESSION['document-content']) && !isset($_SESSION['document-title'])):
  $_SESSION['username'] = "Guest";
  $_SESSION['document-title'] = "Document 1";
  $_SESSION['document-width'] = "1000";
  $_SESSION['document-content'] = "";
endif;

$username = $_SESSION['username'];
$document_title  =  urldecode($_SESSION['document-title']);
$document_width  =  urldecode($_SESSION['document-width']);
$document_content = $_SESSION['document-content'];

?>

<!DOCTYPE html>
<!--[if IE 8]> <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->

<head>

<meta charset="utf-8" />
<meta name="viewport" content="width=device-width" />
<title>NetfunkDesign Theme-Bones (Beta)</title>
<link rel="stylesheet" type="text/css" href="css/normalize.css" />
<link rel="stylesheet" type="text/css" href="css/foundation.css" />
<script type='text/javascript' src='js/vendor/custom.modernizr.js'></script>
<link rel="stylesheet" type="text/css" href="style.css" />
<script type='text/javascript' src='http://code.jquery.com/jquery-1.9.1.js'></script>
<script type='text/javascript' src='http://code.jquery.com/jquery-migrate-1.1.0.js'></script>
<script type='text/javascript' src='http://code.jquery.com/ui/1.9.2/jquery-ui.js'></script>
<script type='text/javascript' src='js/foundation.min.js'></script>
<link rel="stylesheet" type="text/css" href="css/jquery-ui.css">
<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.js'></script>
<script type='text/javascript' src='js/jquery.ui.touch-punch.js'></script>
<script type='text/javascript' src='js/jquery.contextMenu.js'></script>
<link rel="stylesheet" type="text/css" href="css/jquery.contextMenu.css">
<script type='text/javascript' src='js/jquery.slimscroll.js'></script>
<script type='text/javascript' src='js/basic.js'></script>

</head>

<body class="antialiased">

<script>
  document.write('<script src=js/vendor/'
  + ('__proto__' in {} ? 'zepto' : 'jquery')
  + '.js><\/script>');
</script>

<div id="home">
    <div id="content">
		<div class="row">

			<br />
			<div class="large-12 colums">
				<img src="images/logo1.png" >
			</div>
			<br />

			<div class="large-12 colums">
				<p>
					Theme-Bones is built on the Foundation grid system by Zurb. It is an experimental system created  to help design
					new and useful wordpress theme layouts with a visually aided creative process. Like a WYSIWYG editor which is
					dedicated to Wordpress theme layout development.
				</p>

				<p>
					Design your layout by adding common functionality like sidebars and menu areas. Create customized, responsive,
					and engaging theme layouts with the Foundation system set and our easy to use tools and visual aids.
				</p>

				<a href="demo.php" class="button medium round secondary"> Try it out here </a>

				<p class="text-center">
					<img src="images/preview-img-1.png" width="835" height="379" />
				</p>
			</div>
		</div>
    </div><!--content end-->
</div><!--wrapper end-->

<script type="text/javascript">
  $(document).foundation('joyride','start');
</script>

</body>
</html>
