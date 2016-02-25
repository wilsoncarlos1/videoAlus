function validar() {

	var nome = form1.nome.value;
	var email = form1.email.value;
	var senha = form1.senha.value;

	if (nome =="") {
		alert('preencha o campo com seu nome');
		form1.nome.focus();
		return false;
	}
}