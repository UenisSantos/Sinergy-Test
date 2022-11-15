import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Button = ({ children ,className ,click}) => {
return (

<Styled.Button className={className} onClick={click}  >
{children}
</Styled.Button>
)
};


Button.propTypes = {

children: P.node.isRequired,
className:P.node,
click:P.func
}
