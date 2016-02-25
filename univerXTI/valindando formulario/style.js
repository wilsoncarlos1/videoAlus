
function validacao(){

	if (document.form.nome.value == "") {
		alert("por favor prencha o nome");
		document.form.nome.focus();
		return false;
	}

	if(document.form.senha.value.length <8) {

		alert("a senha deve ter no minimo 8 caracteres");
		document.form.senha.focus();
		return false;
	}
}