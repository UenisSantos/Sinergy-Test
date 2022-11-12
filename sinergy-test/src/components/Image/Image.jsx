import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Image = ({
	src,
alt,
classe,
}) => {
return (

<Styled.Image  className={classe}  src={src}  alt={alt}/>
)

};


Image.propTypes = {

	src: P.node.isRequired,
	alt:P.string.isRequired,
	classe:P.string
}
