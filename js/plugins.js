// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Fix shimmy-grid gutter in ie7 and below.
(function($) {
	var fixWidths = [];
	var fixRun = false;

	$.fn.ieGutterFix = function(vertical, horizontal) {
		this.css({'margin': 0, 'padding': 0, 'padding-bottom': vertical }).children()
			.css({ 'margin': 0, 'padding': 0, 'padding-left': horizontal }).each(function(i){

			if (fixRun === false) {
				var tempEl = $(this),
					w = tempEl.width(),
					pWidth = tempEl.parent().width(),
					percent = 100*w/pWidth;

				fixWidths[i] = percent;
			}

			$(this).width(fixWidths[i] + "%");

			var el = $(this),
				parent = el.parent(),
				width = el.width();

			if (parent.is(':last-child')) {
				parent.css('padding-bottom', 0);
			}

			if (el.is(':first-child')) {
				el.css('padding-left', 0);
			}

			el.outerWidth(width - 1);

		});

		fixRun = true;
	}
})(jQuery);

// Sets all columns to same height globally or by parent row.
(function($) {
	$.fn.equalHeight = function(equalize) {
		if (equalize === true) {
			return this.height('100%').height(Math.max.apply(this,$.map(this,function(e){return $(e).height()})));
		} else {
			var currentTallest = 0,   
				currentRowStart = 0,
				rowDivs = [],
				el = null,
				topPosition = 0;
			this.height('100%').each(function() {
				el = $(this);
				topPosition = el.offset().top;
				if (currentRowStart !== topPosition) {
					// we just came to a new row.  Set all the heights on the completed row
					for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
						rowDivs[currentDiv].height(currentTallest);
					}
					// set the variables for the new row
					rowDivs = []; // empty the array
					currentRowStart = topPosition;
					currentTallest = el.height();
					rowDivs.push(el);
				} else {
					// another div on the current row.  Add it to the list and check if it's taller
					rowDivs.push(el);
					currentTallest = Math.max(currentTallest, el.height());
				}
				// do the last row
				for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
			});
		}
	}
})(jQuery);