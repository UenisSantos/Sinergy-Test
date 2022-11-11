import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Form = ({
	children ,
	onSubmit,

}) => {
return (

<Styled.Label>
{children}
</Styled.Label>
)
};


Form.propTypes = {

children: P.node.isRequired,
onSubmit:P.func
}
