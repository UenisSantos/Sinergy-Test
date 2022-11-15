import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Button = ({ children ,className ,click,type}) => {
return (

<Styled.Button className={className} onClick={click} type={type} >
{children}
</Styled.Button>
)
};


Button.propTypes = {

children: P.node.isRequired,
className:P.node,
click:P.func
}
