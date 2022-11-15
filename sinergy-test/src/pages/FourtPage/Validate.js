/* eslint-disable no-unused-vars */
import { Erro } from "./Erro";

export const Validate = (formValues, setErroEmail, setErroName, setDisabled) => {

	Erro(formValues, setErroEmail, setErroName)


	let name = formValues.name.includes(` `)
	let email = formValues.email.includes('@')
	let finalEmail = formValues.email.includes('.com')

	name && email && finalEmail ? setDisabled('enable') : setDisabled('disabled')



}
