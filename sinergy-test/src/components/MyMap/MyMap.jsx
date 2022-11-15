import React from 'react'
import *  as Styled from './styles'
import { Image } from '../Image/Image';
import { Text } from '../Text/Text';


export const MyMap = ({ information=[] }) => {






return (

information.map((value,i)=>(

<Styled.MyMap key={i}>
	{value.imageLogo && <Image
	alt={value.altLogo}
	src={value.imageLogo}
	classe={value.altLogo}
	/>}

{ value.title &&
<Text as='h2'
size='small'>
	{value.title}
	</Text>}



{ value.subTitle&&
<Text as ='p'
size='smaller'>
	{value.subTitle}
</Text>
}
	<Image
alt={value.alt}
src={value.image}
classe={value.alt}
/>



</Styled.MyMap>

))




)
};



