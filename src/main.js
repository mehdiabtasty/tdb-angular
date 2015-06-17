$.root_ = $('body');
/*
 * App setter
 */	
	setApp = (function(app) {
		/* START: MENU ACTIONS */
		app.MenuActions = function(){
			var menuActions = {
				// MINIFY MENU
				minifyMenu: function($this){
					if (!$.root_.hasClass("menu-on-top")){
						$.root_.toggleClass("minified");
						$.root_.removeClass("hidden-menu");
						$('html').removeClass("hidden-menu-mobile-lock");
						$this.effect("highlight", {}, 500);
					}
				},

				// TOGGLE MENU 
				toggleMenu: function(){
					if (!$.root_.hasClass("menu-on-top")){
						$('html').toggleClass("hidden-menu-mobile-lock");
						$.root_.toggleClass("hidden-menu");
						$.root_.removeClass("minified");
					} else if ( $.root_.hasClass("menu-on-top") && $(window).width() < 979 ) {	
						$('html').toggleClass("hidden-menu-mobile-lock");
						$.root_.toggleClass("hidden-menu");
						$.root_.removeClass("minified");
					}
				}
			};
			$.root_.on('click', '[data-action="minifyMenu"]', function(e) {
				var $this = $(this);
				menuActions.minifyMenu($this);
				e.preventDefault();
				
				//clear memory reference
				$this = null;
			}); 
			
			$.root_.on('click', '[data-action="toggleMenu"]', function(e) {	
				menuActions.toggleMenu();
				e.preventDefault();
			});  
		};
		/* END: MENU ACTIONS */

		return app;
		
	})({});
/*
 * DOCUMENT LOADED EVENT
 */
	jQuery(document).ready(function() {
		
		setApp.MenuActions();

		// enable tooltips
		$("[rel=tooltip], [data-rel=tooltip]").tooltip();
	
		// enable popovers
		$("[rel=popover], [data-rel=popover]").popover();
	
		// enable popovers with hover states
		$("[rel=popover-hover], [data-rel=popover-hover]").popover({
			trigger : "hover"
		});
	
	});