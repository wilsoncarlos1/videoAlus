//manipular um array


var paises = new Array("brasil", "Russia", "India", "China");
//aqui busquei a quantidade de valores no array
for(var 1=0; i<paises.length; i++){
	alert(paises[i]);
}

alert(paises[4]);
//...........................................................

var  paises2 = ["brasil", "Russia", "India", "China"];

alert(paises2);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++
var frutas = ["cupuaçu", "banana", "graviola","açai", "laranja"];
//substituir os valores do array
alert(frutas.splice(2,2,"abacate", "acerola", "tangerina","cupuaçu"));
alert(frutas);


//-------------------------------------------------

var pessssos = ["Ricardo","Sandra", "Beatriz", "wilson"];
alert(pessssos.push("Carlos"));//adiciona valores no final  da fila 
alert(pessssos);
alert(pessoas.shift());//aqui remove pessoas do fim da fila 
alert(pessoas);
alert(pessoas.unshift("Wesley"));//adiciona na frente da fila
alert(pessoas);