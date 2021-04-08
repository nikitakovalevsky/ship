$(function(){
    $.datepicker.regional['en'] = {
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['en']);
    $('#start').datepicker({
		prevText: '<i class="fa fa-chevron-left"></i>',
		nextText: '<i class="fa fa-chevron-right"></i>'
	});
	$('#finish').datepicker({
		prevText: '<i class="fa fa-chevron-left"></i>',
		nextText: '<i class="fa fa-chevron-right"></i>'
	});
	$('body').on('click','.s-panel-button',function(){
	    $('.s-panel').toggleClass('hidden');
	});
});



$(window).scroll(function() {
	var st = $(this).scrollTop();
	$(".waves").css({"transform" : "translateY(-" + st/40 + "%"})
	$(".swimmingship").css({"transform" : "translate(0%, -" + st/10 + "%"})
	$(".swimmingship2").css({"transform" : "translate(" + st/8 + "%,0%"})
	$(".swimmingship3").css({"transform" : "translate(" + st/8 + "%,0%"})
});

/* $(window).scroll(function() {
	var st = $(this).scrollTop();
	var position = $('.waves').css('top');
	var positionParse = parseInt(position);
	
	if(positionParse < 600){
    $(".waves").css({"transform" : "translateY(-" + st + "%"})
	  $(".find-berth span").css({"transform" : "translate(0%, -" + st + "%"})
	}

}); */

