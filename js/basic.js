// JavaScript Document

$(function(){

	$('.grid-menu-scroll').slimScroll({
		height: ''
	});

	$('#preview-column-scroll').slimScroll({
		height: '100%',
		alwaysVisible : true
	});

	// ceate loading image layer

	$("#wrapper").before('<div class="load-over"></div>');

	$('.load-over').fadeIn(1000, function(){

		$(".load-over").after(
			'<div class="load-over-image">'
			+ '<i class="fa fa-spinner fa-spin"></i>'
			+'</div>'
		);

		window.setTimeout( function(){
			$('.load-over').fadeOut(1000, function(){
				$(".load-over-image").remove();
				$(".load-over").remove();
				$('.editor-window').fadeIn(500, function(){
						$('footer').fadeIn(500);
				});
			});
		}, 1500);
	});

	if ($("#document-content-cache").val()){

		//alert('cached');

		$("#sortable").html(decodeURI($("#document-content-cache").val()));

		$("#sortable li .inner").sortable('destroy').draggable('destroy').resizable({
			handles: "se"
		});

		$("#sortable li .inner input").click(function() {
			 $(this).parent().effect("fade", {}, 500, function(){
				$(this).parent().remove();
			});
		});

		$("#document-content-cache").val('');
		$("#sortable").sortable('refresh');
	}

	// drag and drop --------------------------------------------------------

	$("#grid-menu li").sortable('destroy').draggable('destroy').draggable({
		connectToSortable: "#sortable",
		scroll: false,
		appendTo: 'body',
		revert: "invalid",
		containment: '#equipCont',
		helper: function (e, ui) {
			//alert($(this).parent().attr('id'));
			//$(this).parent().css('overflow','visible');
			//$("#grid-menu").height('408');
			return $(this).clone().css('width', $(this).width(), 'z-index', '1010000000');
		}
	});

	$("#sortable").droppable('destroy').droppable({
		drop: function (e, ui) {
			var dragClone = $(ui.draggable).clone();
			$("#sortable").append(dragClone);
		}
	});

	$("#sortable").disableSelection();

	$("li .inner").mousedown(function(){
		$(".slimScrollBar").css('visibility','visible');
		$(".slimScrollRail").css('visibility','visible');
	}).mousedown(function(){
		$(".slimScrollBar").css('visibility','hidden');
		$(".slimScrollRail").css('visibility','hidden');
	});

	// sort and remove -------------------------------------------------

	$( "#sortable" ).resizable('destroy').draggable('destroy').droppable('destroy').sortable({

		opacity: 0.8,

		start: function (e, ui) {

			//alert("started");
			//alert($(ui.item).parent().attr('id'));

			min_height = $(ui.item).next().height();
			max_height = '1000';
			item_width = $(ui.item).next().width();

			$("#sortable li div.inner").resizable({
				handles: "se",
				minWidth: item_width,
				maxWidth: item_width,
				minHeight: min_height,
				maxHeight: max_height,
				autoHide: true ,
				start: function( event, ui ) {
					$(this).width($(this).width());
				},
				stop: function( event, ui ) {
					$(this).width('');
				}
			});

			$("#sortable li .inner input").click(function() {
				 $(this).parent().effect("fade", {}, 500, function(){
					$(this).parent().remove();
				});
				$("#sortable").resizable('destroy').sortable('refresh');
			});
		},

		update: function (e, ui) {
			//
		},

		change: function (e, ui) {
			//
		},

		receive: function (e, ui) {
			$(".slimScrollBar").css('visibility','visible');
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
	item_width = $('#grid-menu').width();

	$("#grid-menu-resizable").resizable({
		handles: "s",
		minWidth: item_width,
		maxWidth: item_width,
		minHeight: min_height,
		maxHeight: max_height,
		autoHide: false,
		start: function( event, ui ) {
			$(this).width($(this).parent().width());
		},
		stop: function( event, ui ) {
			$(this).width('');
		}
	});

	/* document width select option */

	$("#menu-option.document-width select").change(function(){
		$("#sortable").removeClass (function (index, css) {
			return (css.match (/\bdocument-\S+/g) || []).join(' ');
		});
		var new_document_width = "document-" + this.value ;
		$("#sortable").addClass(new_document_width);
	});

	$("a#save").click(function(){
		save_session();
	});

	$("a#reset").click(function(){
		$("#sortable li").effect("fade", {}, 500, function(){
			$(this).remove();
			reset_session();
		});
	});

	$("#sortable div").disableSelection();
	$("#grid-menu").disableSelection();
	$("#toolbox").disableSelection();
	$("#home").disableSelection();
	$("footer").disableSelection();

	/* store to session / save button */

	// update user session information ( yes, guests too <_< )

	function save_session(){

		$("#wrapper").before('<div id="load-over" style="position: absolute; width: 100%; height: 100%; left; '
		+ '0px; top; 0px; display: none; z-index: 20000; background: #FFF; opacity: .98; "></div>');

		window.setTimeout( function(){

			$('#load-over').fadeIn(500, function(){

				$("#load-over").after('<div id="load-over-image" style="position: absolute; z-index: 20000;'
				+ 'left: 0; width: 100%; top: 35%; text-align: center; font-weight: bold; color: #368a0d; font-size: 16px; opacity: 1;">'
				+ '<img src="css/images/loading-circle.gif"></div>');

				// save session

				window.setTimeout( function(){
					var document_content = $("#sortable").html();
					var document_name = $(".document-name input").val();
					var document_width = $('.document-width select option:selected').val();
					//basil.set('username',			'Guest');
					basil.set('document-width',		document_width);
					basil.set('document-title',		document_name);
					basil.set('document-content',	document_content);
					$('#load-over').fadeOut(100, function(){
						$("#load-over-image").remove();
						$("#load-over").remove();
						$("#document-update-log").html( 'Document Saved' );
						$("#document-update-log").fadeIn("fast");
						$(".document-title").effect("fade", {}, 500, function(){
							$(".document-title").html( document_name );
							$(".document-title").effect("fade", {}, 500);
						});
						$("#document-update-log").effect("fade", {}, 2000);
					});
				}, 1000);
			});
		}, 100);
	}

	/* reset stage button */

	function reset_session(){
		basil.set('document-content',	'');
		$("#document-update-log").html( 'updated' );
		$("#document-update-log").fadeIn("fast");
		$("#document-update-log").effect("fade", {}, 2000);
	}

	/* conntent menus */

	$.contextMenu({
		selector: '#sortable li .inner',
		callback: function(key, options) {
			var m = "clicked: " + key;
			window.console && console.log(m);

			if (key == 'quit')

			$("#sortable li").effect("fade", {}, 500, function(){
				$(this).remove();
				reset_session();
			});

			if (key == 'delete')
			$(options.selector).parent().effect("fade", {}, 500, function(){
				$(this).remove();
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
