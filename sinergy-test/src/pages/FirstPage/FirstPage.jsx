import React from 'react'
import { MyMap } from '../../components/MyMap/MyMap';
import *  as Styled from './styles'
import { pageInformation } from './pageInformation';


export const FirstPage = () => {
return (

<Styled.FirstPage>
<MyMap information={pageInformation}  />

</Styled.FirstPage>
)
};
