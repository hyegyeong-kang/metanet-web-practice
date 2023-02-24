$(function(){
	// 1. id = footer ol 태그를 생성하자.
	$('<ol id = "note"></ol>').insertBefore('#footer');
	
	// 2. span 앞에 [1] [2] [3] 
	$('span.footnote').each(function(index){
		$(this).before('<a id="context-' + (index + 1) + '">[' + (index + 1) + ']</a>')
			.appendTo('#note')
			.append('&nbsp; <a href="#context-'+(index + 1) + '">context-' + (index + 1) + '</a>')
			.wrap('<li></li>');
	});
});