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
setDisplaySuccess(true)
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
<>
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
		/>		<div  className='erro'  >
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


	<Text as='span'>Onde nos conheceu?</Text>
	<CheckBox  onchange={handleInputChange}   id='google' value='Google'

	/>

     <CheckBox		onchange={handleInputChange}
 id='rede-social' value='Redes Sociais'/>

     <CheckBox onchange={handleInputChange} id='indicacao' value='Indicação'/>
</ul>



<Input id='value-employees'  name='funcionarios' value={employee} onchange={handleInputChange}  type='number'
		/>




		  <Input disabled={disabled} id={disabled} type='submit'
		value='enviar'
		/>
	</Form>
<section className='funcionarios'>
<Text as='p'>
Quantos de funcionários
</Text>

	<Button className='decrement'  click={()=>setEmployee(employee -1)}    >
<MdRemove/>
</Button>





<Button className='increment'  click={()=>setEmployee(employee +1)}  >
<MdAdd/>
</Button>




</section>
{displaySuccess && <Successs/>}
</Styled.FourtPage>


</>

)
};
