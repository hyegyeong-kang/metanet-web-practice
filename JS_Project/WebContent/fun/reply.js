// 자바스크립트 중괄호: 객체, 대괄호: 배열

let replyServie = (function(){
	
	function create(){
		console.log('create');
	}
	
	function update(){
		console.log('update');
	}
	
	function getList(param, callback){ //파라미터에 함수를 전달해야 함
		let data = "결과값";
		callback(data);
	}
	
	return{
		create: create,
		update: update,
		getList: getList 
	}
})();