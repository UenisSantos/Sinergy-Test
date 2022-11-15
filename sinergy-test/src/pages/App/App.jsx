
import React from 'react'
import { FirstPage } from '../FirstPage/FirstPage';
import { SecondPage } from '../SecondPage/SecondPage';
import { ThirdPage } from '../ThirdPage/ThirdPage';
import { FourtPage } from '../FourtPage/FourtPage';

import *  as Styled from './styles'


export const App = () => {
	return (

		<Styled.App>
<FirstPage/>
<SecondPage/>


<div className='side'>
	<ThirdPage/>
<FourtPage/>
</div>



</Styled.App>
	)
};
