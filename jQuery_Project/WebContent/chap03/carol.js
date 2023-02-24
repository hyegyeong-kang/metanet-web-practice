//step1
$(function(){
	$('#switcher-large').on('click', function(){
		$('body').addClass('large');
	});
});


//step2 : Large Print -> large, Narrow Column -> narrow
// removeClass('');  , Default -> 처음 상태
$(function(){
	$('#switcher-large').on('click', function(){
		$('body').removeClass('narrow').addClass('large');
	});
	$('#switcher-narrow').on('click', function(){
		$('body').removeClass('narrow').addClass('narrow');
	});
	$('#switcher-default').on('click', function(){
		$('body').removeClass('large').removeClass('narrow');
	});
});



//step3 : 클릭한 버튼만 selected 스타일 적용되도록 하자.
$(function(){
	$('#switcher-large').on('click', function(){
		$('body').removeClass('narrow').addClass('large');
		$('.button').removeClass('selected');
		$(this).addClass('selected');
	});
	$('#switcher-narrow').on('click', function(){
		$('body').removeClass('narrow').addClass('narrow');
		$('.button').removeClass('selected');
	});
	$('#switcher-default').on('click', function(){
		$('body').removeClass('large').removeClass('narrow');
		$('.button').removeClass('selected');
	});
});


//step4 : selected 관련된 중복된 코드를 최적화 하자.
$(function(){
	$('#switcher-large').on('click', function(){
		$('body').removeClass('narrow').addClass('large');
	});
	$('#switcher-narrow').on('click', function(){
		$('body').removeClass('narrow').addClass('narrow');
	});
	$('#switcher-default').on('click', function(){
		$('body').removeClass('large').removeClass('narrow');
	});
	
	$('#switcher.button').on('click', function(){
		$('.button').removeClass('selected');
		$(this).addClass('selected');
	})
});


// step5 : 	전체적으로 중복된 코드를 조금 더 최적화 하자.  
$(function(){	
	$('#switcher.button').on('click', function(){
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-large') {
			$('body').removeClass('narrow').addClass('large');
		}else if(this.id == 'switcher-narrow') {
			$('body').removeClass('narrow').addClass('narrow');
		}
	})
});


// step6 :  이벤트 통합 함수 =>  개별 이벤트 함수 변경   (개별이벤트 함수를 쓰면 이벤트명 생략해도 됨)
$(function(){	
	$('#switcher.button').click(function(){
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-large') {
			$('body').removeClass('narrow').addClass('large');
		}else if(this.id == 'switcher-narrow') {
			$('body').removeClass('large').addClass('narrow');
		}
	})
});


// step7 : hovor 이벤트 주입
$(function(){
	$('#switcher.button').hovor(function(){
		$(this).addClass('hovor');
	}, function(){
		$(this).removeClass('hover');
	});
	
	
})

// step8: <h3>스타일 변환기</h3>  클릭했을 때 -> 버튼 3개가  화면에서 사라지게 하자.
$(function(){
	$('#switcher h3').click(function(){
		$('#switcher.button').toggleClass('hidden');		
	});
	
	$('#switcher.button').click(function(){
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-large') {
			$('body').removeClass('narrow').addClass('large');
		}else if(this.id == 'switcher-narrow') {
			$('body').removeClass('large').addClass('narrow');
		}
	})
});



// step9 : 이벤트 버블링 방지
$(function(){
	$('#switcher h3').click(function(){
		$('#switcher.button').toggleClass('hidden');		
	});
	
	$('#switcher.button').click(function(event){
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-large') {
			$('body').removeClass('narrow').addClass('large');
		}else if(this.id == 'switcher-narrow') {
			$('body').removeClass('large').addClass('narrow');
		}
		
		event.stopPropagation();
	})
});


// step10 :  on('click') 으로 이벤트 발생 -> off('click') 이벤트 해제
// 		large, narrow 버튼을 클릭 후  버튼이 사라지게 하는 이벤트를 해제 시켜 보자.
$(function(){
	$('#switcher h3').on('click.kosa', function(){
		$('#switcher.button').toggleClass('hidden');		
	});
	
	$('#switcher').on('click.metanet', function(){
		alert('다른 이벤트 내용');
	});
	
	$('#switcher.button').click(function(event){
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == 'switcher-large') {
			$('body').removeClass('narrow').addClass('large');
		}else if(this.id == 'switcher-narrow') {
			$('body').removeClass('large').addClass('narrow');
		}
		
		event.stopPropagation();
	});
	
	$('#switcher-large, #switcher-narrow').click(function(){
		$('#switcher').off('click.kosa');
	});
	
	$('#switcher').trigger('click.kosa'); // 이벤트를 자동으로 발생시킴
	$('#switcher').click();
	
});
