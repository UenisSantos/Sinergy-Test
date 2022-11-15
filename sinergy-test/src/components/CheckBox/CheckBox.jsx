import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'
import { Input } from '../Form/Input/Input';
import { Text } from '../Text/Text';

export const CheckBox = ({ value ,id , onchange , onclick ,}) => {
return (

<Styled.CheckBox>

	<Text as='span'> {value}</Text>

    <label id={id}>
	    <Input  onclick={onclick} onchange={onchange} type="checkbox" name={value}
	    value={value}
	    />

	</label>


</Styled.CheckBox>
)
};


CheckBox.propTypes = {

	value:P.string,
	id:P.string,
}
