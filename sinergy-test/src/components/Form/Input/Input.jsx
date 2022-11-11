import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Input = ({

type,
value,
name,
placeHolder
onchange

}) => {
return (

<Styled.Input
 type={type}
   value={value}
    placeHolder={placeHolder} />


)
};


Input.propTypes = {

type: P.string.isRequired,
value: P.string.isRequired,
placeHolder: P.string,
name: P.string,
onchange: P.func,


}
