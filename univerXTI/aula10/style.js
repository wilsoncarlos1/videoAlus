var a = [2];


window.onload = function() {
	carregarLuz();
	carregarLuzquebrada();


}
var luzes = [false, true, false, true, true, true, false, true, false];
function carregarLuz(){
	//essa função recebe todos elementos de uma teg ou seja reculpera
	var imagens = document.getElementsByTagName("img");
	for (var i = 0; i<imagens.length; i++){

		if (luzes[i]) {
			imagens[i].src ="img/lampada2.JPG";
		}
		else{
			imagens[i].src = "img/lampada3.jpg"
		}
	}

}
function carregarLuzquebrada(){
	var imagens = document.getElementsByTagName("img");
	for (var i =0; i<luzes.length; i++){
		if (luzes[i]) {
			imagens[i].src ="img/lampada1.jpg";

			var quer = confirm("voce quer essa lampada?");
			if (quer) {
				break;
			}else{
				imagens[i].src = "img/lampada1.JPG";
			}

		}
	}


}	
