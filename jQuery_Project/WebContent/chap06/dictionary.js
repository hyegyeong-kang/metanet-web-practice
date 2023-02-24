// step1
$(function(){
	$('#letter-a a').click(function(){
		$('#dictionary').hide().load('a.html', function(){})
			$(this).fadeIn();
	});
	return false; // 기본 이벤트를 취소해주는 것 
});


// step2 ; json 결과값을 HTML 로 변환해보기  => 패턴 기억 !
$(function(){
	$('#letter-b a').click(function(){
		$.getJSON('b.json', function(data){
			$('#dictionary').empty();
			// 결과값: [{},{}] => HTML
			$.each(data, function(index, item){
				let html = '<div class="entry">';
				html += '<h3 class="term">' + item.term + '</h3>';
				html += '<div class="part">' + item.part + '</div>';
				html += '<div class="definition">' + item.definition + '</div>';
				html += '</div>';
				
				$('#dictionary').append(html);
			});
		});
		return false;
	});
});

// step2-1 : ajax() 함수로 변환
$(function(){
	$('#letter-b a').submit(function(){
		$.ajax({
			url: 'b.json',
			type: 'post',
			data: $(this).serialize(),
			dataType: 'text',
			success: function(data){
				$('#dictionary').text(data);
			}
		});
		return false;
	});
});




// step3
$(function(){
	$('#letter-c a').click(function(){
		$.getScript('c.js');
		return false;
	});
});


// step4
$(function(){
	$('#letter-d a').click(function(){
		// XML => HTML => 화면 출력
		$.get('d.xml',function(data){
			$(data).find('entry').each(function(index){
				$entry = $(this); // $entry -> $ 표시로 제이쿼리 객체구나 알 수 있음
				
				let html = '<div class="entry">';
				html += '<h3 class="term">' + $entry.attr('term') + '</h3>';
				html += '<div class="part">' + $entry.attr('part') + '</div>';
				html += '<div class="definition">' + $entry.find('definition').text() + '</div>';
				html += '</div>';
				
				$('#dictionary').append(html);
			});
		});
		return false;
	});
});


// step6 : 서버에게 파라미터를 전달하고 싶음
$(function(){
	$('#letter-e a').click(function(){
		$.get('server3.jsp', {'term': $(this).text()}, function(data){
			$('#dictionary').text(data);
		});
		return false;
	});
});

// step7 click 이벤트에는 serialize 사용할 수 없음 
$(function(){
	$('#letter-f form').submit(function(){
		$.ajax({
			url: 'server3.jsp',
			type: 'post',
			data: $(this).serialize(), // 알아서 문자열 형식으로 만들어 서버에 전달한다.
			dataType: 'text',
			success: function(data){
				$('#dictionary').text(data);
			}
		});
		return false; // 반드시 써줘야 함 -> 기본 태그는 a 와 form 이 있다.
	});
});


