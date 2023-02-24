$(function(){
	$('div.label').click(function(){
		let pWidth = $('div.speech p').outerWidth();
		let divWidth = $('#switcher').outerWidth();
		
		let num = parseInt(pWidth) - parseInt(divWidth);
		
		$('#switcher')
			.fadeTo('fast', 0.5)
			.animate({marginLeft: num}, 'slow') // marginleft 가 num 에 도달때 까지 애니메이션 해줘라 
			.fadeTo('fast', 1.0)
			.slideUp('slow', function(){
				$(this).css('background', 'red');
			})
			.slideDown('slow');
	});
});


// 2번째 p 태그를 화면에서 숨겨보자. eq()	hide()
// a 태그를 클릭 : slideUp() + slideDown() => slideToggle()
// read more => 클릭 => read less
// read less => 클릭 => read more 
// => text() :  텍스트 값을 추출 
// => text(값) : 텍스트 값을 변경 
$(function(){
	$('div.speech p').eq(1).hide();
	$('a.more').click(function(){
		$('div.speech p').eq(1).slideToggle('slow');
		
		let $link = $(this);  // 변수 앞 달러 표시는 제이쿼리 객체라는것 
		if($link.text() == 'read more'){
			$link.text('read less');
		} else {
			$link.text('read more');
		}
	});
});