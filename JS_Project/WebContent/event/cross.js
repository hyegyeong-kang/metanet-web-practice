let cross = {};
cross.Event = {};

cross.Event.addListener = function(element, name, handler, capture){
	capture = capture | false;
	
	if(element.addEventListener){ // 표준 브라우저
		element.addEventListener(name, handler, capture);
	} else { // 구형 IE
		element.attachEvent('on' + name, handler);
	}
}



cross.Event.stopBubble = function(event){
	if (event.stopPropagation) {
		event.stopPropagation();
	} else {
		event.cancelBubble = true;
	}
}

// 이벤트 함수 어떻게 만들고
// stopBubble 어디서 호출하나요