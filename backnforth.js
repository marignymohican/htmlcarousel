$(document).ready(function() {
	$('#mMapParishes .mArrow').on('click',function() {
		var current = $('#mMapParishes .mMapParish.mOpen').data('index');
		var next;
		var pageWidth = $('#mMapParishes').width() + 'px';

		if ( $(this).hasClass('left') ) {
			if ( current < parishes.length - 1 ) {
				next = current + 1;
			} else {
				next = 0;
			}

			parishes[current].container.removeClass('mOpen').addClass('mClosed').animate({'left': '-' + pageWidth},1000,function() {
				$(this).css({'left':pageWidth})
			});
			parishes[next].container.removeClass('mClosed').addClass('mOpen').animate({'left': $('#mMapParishes .mArrow.left').width() + 'px'},1000,function() {
				// load data into table
				// adjust bounds
			});
		}

		if ( $(this).hasClass('right') ) {
			if ( current == 0 ) {
				next = parishes.length - 1;
			} else {
				next = current - 1;
			}

			parishes[current].container.removeClass('mOpen').addClass('mClosed').animate({'left': pageWidth},1000);
			parishes[next].container.removeClass('mClosed').addClass('mOpen').css({'left': '-' + pageWidth}).animate({'left': $('#mMapParishes .mArrow.left').width() + 'px'},1000,function() {
				// load data into table
				// adjust bounds
			});
		}
		console.log(parishes[next].name);
		console.log(parishes[next].bounds);

	});

});