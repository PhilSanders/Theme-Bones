// JavaScript Document


jQuery(function(){


		jQuery('.grid-menu-scroll').slimScroll({


			height: ''


		});

		jQuery('#preview-column-scroll').slimScroll({


			height: '100%',

			 alwaysVisible : true


		});



		// ceate loading image layer

		jQuery("#wrapper").before('<div id="load-over" style="position: absolute; width: 100%; height: 100%; '
		+ '0px; top; 0px; display: none; z-index: 10000; background: #FFF; opacity: .5; "></div>');

		jQuery('#load-over').fadeIn(1000, function(){

			jQuery("#load-over").after('<div id="load-over-image" style="position: absolute; z-index: 20000;'
			+ 'left: 0; width: 100%; top: 35%; text-align: center; font-weight: bold; color: #368a0d; font-size: 16px; opacity: 1;">'
			+ '<img src="css/images/loading-circle.gif"></div>');


			window.setTimeout( function(){

				jQuery('#load-over').fadeOut(1000, function(){

					jQuery("#load-over-image").remove();

					jQuery("#load-over").remove();

					jQuery('.preview-column').fadeIn(500, function(){

							jQuery('#footer').fadeIn(500);

					});

				});

			}, 1500);

		});


		if (jQuery("#document-content-cache").val()){

			//alert('cached');

			$("#sortable").html(decodeURI(jQuery("#document-content-cache").val()));

			jQuery("#sortable li .inner").sortable('destroy').draggable('destroy').resizable({

				handles: "se"


			});

			jQuery("#sortable li .inner input").click(function() {

				 jQuery(this).parent().effect("fade", {}, 500, function(){

					jQuery(this).parent().remove();

				});

			});

			jQuery("#document-content-cache").val('');

			jQuery("#sortable").sortable('refresh');

		}


		// drag and drop --------------------------------------------------------

		jQuery("#grid-menu li").sortable('destroy').draggable('destroy').draggable({

			connectToSortable: "#sortable",
			scroll: false,
			appendTo: '#grid-menu-dumby',
			revert: "invalid",
			containment: '#equipCont',

			helper: function (e, ui) {

				//alert(jQuery(this).parent().attr('id'));

				//jQuery(this).parent().css('overflow','visible');

				//jQuery("#grid-menu").height('408');

				return jQuery(this).clone().css('width', jQuery(this).width(), 'z-index', '1010000000');
			}

		});

		jQuery("#sortable").droppable('destroy').droppable({
			drop: function (e, ui) {
				var dragClone = jQuery(ui.draggable).clone();
				jQuery("#sortable").append(dragClone);
			}

		});

		jQuery("#sortable").disableSelection();





		 jQuery("li .inner").mousedown(function(){

			jQuery(".slimScrollBar").css('visibility','visible');

			jQuery(".slimScrollRail").css('visibility','visible');



		}).mousedown(function(){

			jQuery(".slimScrollBar").css('visibility','hidden');

			jQuery(".slimScrollRail").css('visibility','hidden');

		});



		// sort and remove -------------------------------------------------

		jQuery( "#sortable" ).resizable('destroy').draggable('destroy').droppable('destroy').sortable({

			opacity: 0.8,

			start: function (e, ui) {

				//alert("started");

				//alert(jQuery(ui.item).parent().attr('id'));


				min_height = jQuery(ui.item).next().height();

				max_height = '1000';

				item_width = jQuery(ui.item).next().width();


				jQuery("#sortable li div.inner").resizable({

					handles: "se",

					minWidth: item_width,

					maxWidth: item_width,

					minHeight: min_height,

					maxHeight: max_height,

					autoHide: true ,

					start: function( event, ui ) {

						jQuery(this).width(jQuery(this).width());

					},

					stop: function( event, ui ) {

						jQuery(this).width('');

					}


				});

				jQuery("#sortable li .inner input").click(function() {

					 jQuery(this).parent().effect("fade", {}, 500, function(){

						jQuery(this).parent().remove();

					});

					jQuery("#sortable").resizable('destroy').sortable('refresh');

				});


			},

			update: function (e, ui) {

				//

			},

			change: function (e, ui) {

				//

			},

			receive: function (e, ui) {

				jQuery(".slimScrollBar").css('visibility','visible');

			},

			over: function () {

			    removeIntent = false;

			},

			out: function () {

			    removeIntent = true;

			},

		    beforeStop: function (event, ui) {

			    if(removeIntent == true){

					ui.item.effect("fade", {}, 500, function(){

						ui.item.remove();

					});

				}


            },

			remove: function (e, ui) {

				//

			}


		});



		min_height = '268';

		max_height = '408';

		item_width = jQuery('#grid-menu').width();

		jQuery("#grid-menu-resizable").resizable({

			handles: "s",

			minWidth: item_width,

			maxWidth: item_width,

			minHeight: min_height,

			maxHeight: max_height,

			autoHide: false,

			start: function( event, ui ) {

				jQuery(this).width(jQuery(this).parent().width());

			},

			stop: function( event, ui ) {

				jQuery(this).width('');

			}


		});



		/* document width select option */

		jQuery("#menu-option.document-width select").change(function(){

			$("#sortable").removeClass (function (index, css) {

				return (css.match (/\bdocument-\S+/g) || []).join(' ');

			});

			var new_document_width = "document-" + this.value ;

			jQuery("#sortable").addClass(new_document_width);


		});


		jQuery("a#save").click(function(){

			save_session();

		});


		jQuery("a#reset").click(function(){

			jQuery("#sortable li").effect("fade", {}, 500, function(){

				jQuery(this).remove();

				reset_session();

			});


		});


		jQuery("#sortable div").disableSelection();

		jQuery("#grid-menu").disableSelection();

		jQuery("#toolbox").disableSelection();

		jQuery("#home").disableSelection();

		jQuery("#footer").disableSelection();


		/* store to session / save button */

		// update user session information ( yes, guests too <_< )

		function save_session(){

			jQuery("#wrapper").before('<div id="load-over" style="position: absolute; width: 100%; height: 100%; left; margin-left: 168px; '
			+ '0px; top; 0px; display: none; z-index: 20000; background: #FFF; opacity: .98; "></div>');

			window.setTimeout( function(){

				jQuery('#load-over').fadeIn(500, function(){

					jQuery("#load-over").after('<div id="load-over-image" style="position: absolute; z-index: 20000;'
					+ 'left: 0; width: 100%; top: 35%; text-align: center; font-weight: bold; color: #368a0d; font-size: 16px; opacity: 1;">'
					+ '<img src="css/images/loading-circle.gif"></div>');

					// ceate loading image layer

					var document_content = jQuery("#sortable").html();

					var document_name = jQuery(".document-name input").val();

					var document_width = jQuery('.document-width select option:selected').val();

					var request = jQuery.ajax({

						url: "inc/ajax-update-session.php",

						type: "POST",

						data: {

							update_document_title : encodeURI(document_name),

							update_document_width : document_width,

							update_document_content : encodeURI(document_content)

						},

						dataType: "html"

					});


					request.done(function(msg) {

						window.setTimeout( function(){


							jQuery('#load-over').fadeOut(100, function(){

								jQuery("#load-over-image").remove();

								jQuery("#load-over").remove();

								$("#document-update-log").html( 'Document Saved' );

								$("#document-update-log").fadeIn("fast");


								$("#document-title").effect("fade", {}, 500, function(){

									$("#document-title").html( document_name );

									$("#document-title").effect("fade", {}, 500);

								});

								window.setTimeout( function(){

									$("#document-update-log").effect("fade", {}, 1000);

								}, 3000);

							});

						}, 1000);


					});

					request.fail(function(jqXHR, textStatus) {

						alert( "Request failed: " + textStatus );

					});

				});

			}, 100);

		}



		/* reset stage button */

		function reset_session(){


			var document_content = jQuery("#sortable").html();

			var request = jQuery.ajax({

				url: "inc/ajax-update-session.php",

				type: "POST",

				data: {reset_document_content : '1'},

				dataType: "html"

			});


			request.done(function(msg) {

				$("#document-update-log").html( 'updated' );

				$("#document-update-log").fadeIn("fast");

				$("#document-update-log").effect("fade", {}, 2000);

			});

			request.fail(function(jqXHR, textStatus) {

				alert( "Request failed: " + textStatus );

			});

		}


		/* conntent menus */

		$.contextMenu({
			selector: '#sortable li .inner',
			callback: function(key, options) {
				var m = "clicked: " + key;
				window.console && console.log(m);

				if (key == 'quit')

				jQuery("#sortable li").effect("fade", {}, 500, function(){

					jQuery(this).remove();

					reset_session();

				});

				if (key == 'delete')

				jQuery(options.selector).parent().effect("fade", {}, 500, function(){

					jQuery(this).remove();

					//reset_session();

				});


			},
			items: {
				"edit": {name: "Edit", icon: "edit"},
				"cut": {name: "Cut", icon: "cut"},
				"copy": {name: "Copy", icon: "copy"},
				"paste": {name: "Paste", icon: "paste"},
				"delete": {name: "Delete", icon: "delete"},
				"sep1": "---------",
				"quit": {name: "Reset Stage", icon: "quit"},


			},
			animation: {duration: 500, show: "fadeIn", hide: "fadeOut"},

		});

		$('#sortable li .inner').on('click', function(e){
			console.log('clicked', this);
		})
	});
