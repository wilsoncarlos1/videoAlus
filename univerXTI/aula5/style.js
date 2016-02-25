/**operado*/


function calcularIMC(){
	//recuperando um um HTML
	document.getElementById("formulario");
	//aqui recuperei o formulario o kilo e o valor do kilos
	//para converter os valores foi adicionado o sinal d +
	var kilos = +formulario.kilos.value;
	var metros = +formulario.metros.value;
	var centimetros = +formulario.centimetros.value;

	var altura = (metros * 100 + centimetros) / 100;
	var imc = kilos /(altura * altura);
	

	//para diminuir os valores 
	formulario.imc.value = imc.toFixed(2);
	
}