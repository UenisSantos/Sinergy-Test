import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Image = ({
	children


}) => {
return (

<Styled.Image>
{children}
</Styled.Image>
)
};


Image.propTypes = {

children: P.node.isRequired
}
