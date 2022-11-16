import React,{useState, useEffect} from 'react'
import *  as Styled from './styles'
import {Text} from '../../components/Text/Text'
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Form/Input/Input';
import { CheckBox } from '../../components/CheckBox/CheckBox';
import {Button}  from '../../components/Button/Button'
import {MdRemove, MdAdd} from 'react-icons/md'
import { Successs } from '../successMoldal/Success';
import { Validate } from './Validate';
export const FourtPage = () => {

const [formValues  ,setFormValues] =useState({
    name:"",
    email:"",
    checked:false,
})
const [employee  ,setEmployee] =useState(10)
const [erroName  ,setErroName] =useState('')
const [erroEmail  ,setErroEmail] =useState('')
const [disabled  ,setDisabled] =useState('disabled')
const [displaySuccess, setDisplaySuccess]=useState(false)

const validaDisplay=()=>{

	formValues.name =""
	formValues.email=""
setDisplaySuccess(true)
setDisabled('disabled')
setTimeout(function(){

setDisplaySuccess(false)

 }, 2000);
}

const handleInputChange=(e)=>{
     const {name,value,type,checked} =e.target;
     const isCheckbox= type==='checkbox';
     const data = formValues[name.name] ||{}
     if (isCheckbox){
	   data[value]=checked
      }

     const newValue=isCheckbox?data:value

     setFormValues({...formValues ,[name]:newValue})

}




useEffect(()=>{

      Validate(formValues,
	 setErroEmail,setErroName,
	 setDisabled)

},[formValues])






const handleSubmit=(e)=>{

     e.preventDefault();
     const formData= new FormData(e.target);
     const data= Object.fromEntries(formData)


//objeto a ser enviado ao back
	console.log(data);

	validaDisplay()

}











return (

<Styled.FourtPage   >
	<Text as='h3' size='small' >
	    Deixa aqui seus dados
         que entraremos
         em contato!
	</Text>

	<Form onSubmit={(e)=>{handleSubmit(e)}}>
		<label className='name'>
		<Text as='span'>Nome Completo</Text>

		<Input type='text'
		name='name'
		onchange={handleInputChange}
		value={formValues.name || ""}
		/>		<div
		className='erro'  >
	<Text as='span'  > {erroName}</Text>
</div>
		</label>



		<label className='email'>
		<Text as='span'>E-mail</Text>

		<Input type='email'
		name='email'
		onchange={handleInputChange}
		value={formValues.email ||""}
		/>

				<div  className='erro'  >
	<Text as='span'  > {erroEmail}</Text>
</div>
		</label>

<ul className='containerCheck'>


	<Text as='p'>Onde nos conheceu?</Text>
	<CheckBox  onchange={handleInputChange}   id='google' value='Google'

	/>

     <CheckBox	 checked	onchange={handleInputChange}
 id='rede-social' value='Redes Sociais'/>

     <CheckBox onchange={handleInputChange} id='indicacao' value='Indicação'/>
</ul>




<div  className='title-funcionario'>
		<Text as='p'>
Quantos de funcionários
</Text>
</div>

<section className='funcionarios'>


	<Button   type='button'   className='decrement'   click={()=>setEmployee(employee -1)}    >
<MdRemove/>
</Button>
<Input id='value-employees'  name='funcionarios' value={employee} onchange={handleInputChange}     type='text'
		/>

<Button className='increment' type='button'  click={()=>setEmployee(employee +1)}  >
<MdAdd/>
</Button>


</section>

		  <Input disabled={disabled} id={disabled} type='submit'
		value='enviar'
		/>
	</Form>



{displaySuccess && <Successs/>}
</Styled.FourtPage>




)
};
