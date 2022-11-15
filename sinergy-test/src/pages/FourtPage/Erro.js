





const erros = {
	userName: 'Por favor, informe seu nome completo. ',
	userEmail: 'Por favor, informe seu melhor e-mail. '

}








export const Erro = (formValues, setErroEmail, setErroName) => {


	formValues.name.length > 5 && formValues.name.match(/[a-z]+ [a-z]*/mg) ? setErroName('') : setErroName(erros.userName)


	formValues.email.length > 5 && formValues.email.match(/[a-z]+@[a-z]+\.com(\.br)*/mg) ? setErroEmail('') : setErroEmail(erros.userEmail)


	return
}

