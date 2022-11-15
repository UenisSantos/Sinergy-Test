import React from 'react'
import { MyMap } from '../../components/MyMap/MyMap';
import *  as Styled from './styles'
import {pageInformation} from './pageInformation'




export const SecondPage = () => {
return (

<Styled.SecondPage>

<MyMap  information={pageInformation}/>


</Styled.SecondPage>
)
};
