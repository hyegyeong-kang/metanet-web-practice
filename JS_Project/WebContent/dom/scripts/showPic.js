function showPic(obj){
		let source = obj.getAttribute("href");
		let placeholder = document.getElementById("placeholder");
		placeholder.setAttribute("src", source);
		let description = document.getElementById("description");
		
		description.innerText = text;
	}





function prepareGallery() {
	let imagegallery = document.getElementById("imagegallery"); // ul
	let links = imagegallery.getElementsByTagName("a"); // a들
	
	for(let i = 0; i < links.length; i++){
		links[i].addEventListener('click', function(e){
			e.preventDefault(); // 기본 이벤트를 취소
			showPic(this);
		}, false);
	}
}

window.onload = prepareGallery;