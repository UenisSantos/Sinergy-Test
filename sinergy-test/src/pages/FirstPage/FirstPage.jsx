import React from 'react'
import { MyMap } from '../../components/MyMap/MyMap';
import *  as Styled from './styles'
import { firstInformation } from './data';


export const FirstPage = () => {
return (

<Styled.FirstPage>
<MyMap information={firstInformation}  />

</Styled.FirstPage>
)
};
