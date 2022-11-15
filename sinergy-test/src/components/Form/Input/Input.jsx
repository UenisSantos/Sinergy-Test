import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Input = ({
disabled='',
type,
value,
name,
placeHolder,
onchange,
id,
onclick

}) => {

let visible = disabled==='disabled'?'disabled'  :  ""



return (

<Styled.Input
 type={type}
 value={value}
name={name}
placeHolder={placeHolder}
 onChange={onchange}
 id={id}
onClick={onclick}
disabled={visible}
    />

)
};


Input.propTypes = {
	disabled:P.string,
type: P.string.isRequired,
value: P.node,
placeHolder: P.string,
name: P.string,
onchange: P.func,
id:P.string,
onclick: P.func,
}
