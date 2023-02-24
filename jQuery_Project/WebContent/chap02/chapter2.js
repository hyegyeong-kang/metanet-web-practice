$(function(){
	$('#selected-plays > li').addClass('horizontal');
	// 모든 li 중에 horizontal 가지고 있는 애 제외해줘
	$('li:not(.horizontal)').addClass('sub-level');
	
	$('a[href $ = pdf]').addClass('pdflink');
	$('a[href ^= mailto]').addClass('mailto');
	// *= 포함하고 있는 애
	//$('a[href *= henry]:not(.mailto)').addClass('henrylink'); 	// 팩토리함수 안에서 사용
	$('a[href *= henry]').not('.mailto').addClass('henrylink');		// 함수는팩토리 함수 밖에서 사용
	
	
	// tr 에 홀수번째 애들에게 스타일주세요 (눈으로 보았을 때 기준)
	$('tr:odd').addClass('alt'); // 짝수
	$('tr:nth-child(odd)').addClass('alt'); // 홀수
	$('tr').filter(':odd').addClass('alt'); //짝수
	
	$('td:contains(Henry)').addClass('highlight'); // td 에서 henry 만 가지고 있는 애들만 스타일 줘라
	
	$('td:contains(Henry)').nextAll().andSelf().addClass('highlight'); // 오른쪽 형제들에게 스타일 줘라
	// andSelf() 앞에 있는 집합도 포함해줘라
	
	$('td:contains(Henry)').parent().find('td').addClass('highlight');
	
	$('td:contains(Henry)').parent().find('td:eq(0)').addClass('highlight')
		.end().find('td:eq(0)').addClass('highlight') 
		// end() 뒤로 돌아가고싶어요 -> parent tr 로 돌아감 
		
		
		
		
		
	//each() => collection(배열) 에 있는 요소를 추출하기 위해 
	// $('요소').each(function(index, item){
	// 		각 요소들의 작업을 수행 $(item)	
	//});
	
	
	
	//$.each(배열, function(index, item){
	//	배열의 각 요소들의 작업을 수행
	//});
	
	
	// each 굉장히 중요함
});