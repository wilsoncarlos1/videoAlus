var farol = "vermelho";
switch (farol){
	case "vermelho":
	document.write("pare! \n");
	break;

	case "amarelo":
	document.write("cuidado!\n");
	break;

	case "verde":
	document.write("prossiga!\n");
	break;

	//se não encontrar nenhum desse valores ela vai no 
	default:
	document.write("cor n existe!");

}

var carro = "branco";

if (carro == "branco") {
	document.write("o carro é branco");

}
else{
	document.write("o carro é de outra cor");
}