import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'
import { Input } from '../Form/Input/Input';
import { Text } from '../Text/Text';

export const CheckBox = ({ value ,id , onchange , onclick}) => {
return (

<Styled.CheckBox>
    <label id={id}>
	<Text as='p'> {value}</Text>
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
