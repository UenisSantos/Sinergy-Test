import React from 'react'
import *  as Styled from './styles'
import  {MyMap}  from '../../components/MyMap/MyMap'
import {pageInformation} from './pageInformation'
export const ThirdPage = () => {
return (

<Styled.ThirdPage>
	<MyMap  information={pageInformation} />
</Styled.ThirdPage>
)
};
