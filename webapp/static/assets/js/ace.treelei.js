ace.handle_side_menu_ok= function(a) {
	var c = a("#sidebar").hasClass("menu-min");
	var b = navigator.userAgent.match(/OS (5|6|7)(_\d)+ like Mac OS X/i);
	a(".nav_oklink").on(
			ace.click_event,
			function(h) {
				var g = a(h.target).closest("a");
				if (!g || g.length == 0) {
					return
				}
				c = a("#sidebar").hasClass("menu-min");
				if (!g.hasClass("dropdown-toggle")) {
					if (c && ace.click_event == "tap"
							&& g.get(0).parentNode.parentNode == this) {
						var i = g.find(".menu-text").get(0);
						if (h.target != i && !a.contains(i, h.target)) {
							return false
						}
					}
					if (b) {
						document.location = g.attr("href");
						return false
					}
					return
				}
				var f = g.next().get(0);
				if (!a(f).is(":visible")) {
					var d = a(f.parentNode).closest("ul");
					if (c && d.hasClass("nav_oklink")) {
						return
					}
					d.find("> .open > .submenu").each(
							function() {
								if (this != f
										&& !a(this.parentNode).hasClass(
												"active")) {
									a(this).slideUp(200).parent().removeClass(
											"open")
								}
							})
				} else {
				}
				if (c && a(f.parentNode.parentNode).hasClass("nav_oklink")) {
					return false
				}
				a(f).slideToggle(200).parent().toggleClass("open");
				return false
			})
};


jQuery(function(a) {
	ace.handle_side_menu_ok(jQuery);
});
