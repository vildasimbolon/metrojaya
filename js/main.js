$(document).mousemove(function(e){
	$('#foto_2').css({
		'left': -e.pageX/20,
		'top': -e.pageX/20
	})

	$('#foto_1').css({
		'left': e.pageX/50,
		'top': -e.pageX/50
	})

	$('#foto_7').css({
		'left': -e.pageX/50
	})

	
})