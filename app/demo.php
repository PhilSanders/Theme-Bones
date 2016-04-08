<?php
/*
  WP _Themebox by Netfunkdesign
*/

session_start();

if (!isset($_SESSION['username']) && !isset($_SESSION['document-width']) && !isset($_SESSION['document-content']) && !isset($_SESSION['document-title'])):
  $_SESSION['username'] = "Guest";
  $_SESSION['document-title'] = "Document 1";
  $_SESSION['document-width'] = "1280";
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
<link rel="stylesheet" type="text/css" href="foundation/css/normalize.css" />
<link rel="stylesheet" type="text/css" href="foundation/css/foundation.css" />
<link rel="stylesheet" type="text/css" href="style.css" />
<script type='text/javascript' src='foundation/js/vendor/modernizr.js'></script>
<script type='text/javascript' src='foundation/js/vendor/placeholder js'></script>
<script type='text/javascript' src='foundation/js/vendor/fastclick.js'></script>
<script type='text/javascript' src='http://code.jquery.com/jquery-1.9.1.js'></script>
<script type='text/javascript' src='http://code.jquery.com/jquery-migrate-1.1.0.js'></script>
<script type='text/javascript' src='http://code.jquery.com/ui/1.9.2/jquery-ui.js'></script>
<script type='text/javascript' src='foundation/js/foundation.min.js'></script>
<link rel="stylesheet" type="text/css" href="css/jquery-ui.css">
<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.js'></script>
<script type='text/javascript' src='js/jquery.ui.touch-punch.js'></script>
<script type='text/javascript' src='js/jquery.contextMenu.js'></script>
<link rel="stylesheet" type="text/css" href="css/jquery.contextMenu.css">
<script type='text/javascript' src='js/jquery.slimscroll.js'></script>
<script type='text/javascript' src='js/basic.js'></script>

</head>

<body class="antialiased">

<div id="wrapper">

  <div id="content">

  <!-- SORT ABLE AREA -->
  
  <div class="preview-column">

    <div class="small-7 columns" style="overflow: auto; border: 0px; padding: 0px; margin-left: 168px; height: 100%!important; min-height: 100%!important; max-height: 100%!important;">

      <div id="preview-column-scroll">

        <div id="document-update-log"></div>

        <div id="document-title"> <?php echo $document_title ?> </div>
          
          <ul class="document-<?php echo $document_width /* sets to default if empty ( 1000px )*/ ?>" id="sortable">
     	  
          </ul>
        
		  <?php  echo '<input type="hidden" id="document-content-cache" value="' . $document_content . '" />'; ?>
        
        </div>
      
      </div>      
      
      <!-- RIGHT SIDE SPACE -->

      <div class="tooloptions-column">
                
               
               
                <div class="small-12">
            
                    <h4> Options </h4>
            
            		
            		<strong> Document Title </strong> 
            	
                	<div id="menu-option" class="document-name">
                    
                    	<input type="text" name="document-name" id="document-name" value="<?php echo $document_title ?>" onFocus="this.select()">
            
            		</div>
            
                    <strong> Page Width </strong> 
                    
                    <div id="menu-option" class="document-width">
                    
                    <form class="custom">
                    
                    	<label for="customDropdown">Label</label>
                    
                        <select id="customDropdown" class="medium">
                            
                            <option<?php echo ($document_width == '1280' ? ' SELECTED' : '')?>>1280px</option>
                            
                            <option<?php echo ($document_width == '1080' ? ' SELECTED' : '')?>>1080px</option>
                            
                            <option<?php echo ($document_width == '1000' ? ' SELECTED' : '')?>>1000px</option>
                            
                            <option<?php echo ($document_width == '800' ? ' SELECTED' : '')?>>800px</option>
                    
                            <option<?php echo ($document_width == '720' ? ' SELECTED' : '')?>>720px</option>
                    
                            <option<?php echo ($document_width == '600' ? ' SELECTED' : '')?>>600</option>
                    
                        </select>
                        
                        </form>
                    
                    </div>
    
                    
                    <br>
                    
                    
                    
                   <strong> Destroy Box</strong> 
                    
                    <ul id="destroyer-bin"> 
                    
                        destroy stuff here
                    
                    </ul>

					<div id="menu-option">

                    	<a id="reset" class="small button"> Reset Stage </a> <a id="save" class="small button"> Store Session </a>
            
            		</div>

            
                </div>
                
            </div> <!--sidebar 1 end-->


                <!-- LEFT SIDE MENU -->
                
            
                <div id="toolbox" class="tooloptions-column">
                
                    <div>
                
                        <h4>Toolbox</h4>
                        
                        <strong>Content Grid Menu</strong>
                        
                        <div id="grid-menu-resizable" class="grid-menu-scroll">
                        
                            <ul id="grid-menu" class="twelve columns">
                            
                                <div class="instructions"> Drag a icon on to the document stage to begin setting up your theme's columns and content positioning. </div>
                            
                                <li class="small-1 column"><div class="inner"> <label>1x1</label> <input type="button" class="button small alert" name="delete" value="x"></div>
                                
                                <li class="small-2 columns"><div class="inner"> <label>1x2</label> <input type="button" class="button small alert" name="delete" value="x"></div>
                            
                                <li class="small-3 columns"><div class="inner"> <label>1x3</label> <input type="button" class="button small alert" name="delete" value="x"></div>
                                 
                                <li class="small-4 columns"><div class="inner"> <label>1x4</label> <input type="button" class="button small alert" name="delete" value="x"></div>
                                 
                                <li class="small-5 columns"><div class="inner"> <label>1x5</label> <input type="button" class="button small alert" name="delete" value="x"></div>
                                 
                                <li class="small-6 columns"><div class="inner"> <label>1x6</label> <input type="button" class="button small alert" name="delete" value="x"></div>
                                 
                                <li class="small-7 columns"><div class="inner"> <label>1x7</label> <input type="button" class="button small alert" name="delete" value="x"></div>
                                 
                                <li class="small-8 columns"><div class="inner"> <label>1x8</label> <input type="button" class="button small alert" name="delete" value="x"></div>
                                 
                                <li class="small-9 columns"><div class="inner"> <label>1x9</label> <input type="button" class="button small alert" name="delete" value="x"></div>
                                 
                                <li class="small-10 columns"><div class="inner"> <label>1x10</label> <input type="button" class="button small alert" name="delete" value="x"></div>
                                 
                                <li class="small-11 columns"><div class="inner"> <label>1x11</label> <input type="button" class="button small alert" name="delete" value="x"></div>
                                 
                                <li class="small-12 columns"><div class="inner"> <label>1x12</label> <input type="button" class="button small alert" name="delete" value="x"></div>

                            </ul>
                        
                        </div>

                    </div>    
                    
                    <ul id="grid-menu-dumby"> <!--stuff grid objects here temporarily while moving to #sortable area --></ul>
                
                </div> <!--side 2 end-->
                        
   
            
            
            <div id="footer" class="floating-footer">
    
    			<div class="file-menu"> 
                    
                 <ul>
                
                    <li><a id="save" href="javascript: void(0)">Save</a></li>  
                    
                    <li><a href="#">Zip</a></li>   
                    
                    <li><a href="#">Share</a></li>  
                
                </ul>
                
              </div>
    
                <h4> <a href="#">
                    
                   <b>W</b>P <br>
                   
                   <span>_themebones</span>
                    
                </a> </h4>
    
             </div>
         </div> <!-- main column end-->
    </div><!--content end-->
</div><!--wrapper end-->

<script>
  $(document).foundation();
</script>

</body>
</html>