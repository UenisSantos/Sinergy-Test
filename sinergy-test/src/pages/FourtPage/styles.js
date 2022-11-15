import styled, { css } from 'styled-components';

export const FourtPage = styled.div`
${({ theme, disabled }) => css`
width: 100%;
height: 976px;
left: -1px;
top: 2348px;
background-color: ${theme.colors.secundaryColor};
display: flex;
flex-direction: column;
h3{
	position: absolute;
width: 346px;
height: 135px;
top: 2407px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 45px;
text-align: center;

color: #FFFFFF;
}



.name{
& span{

width: 166px;
height: 30px;
left: 27px;
top: 2603px;
margin: 0;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height */

color: #FFFFFF;}

& input{
	position: absolute;
width: 321px;
height: 65px;
left: 27px;
top: 2652px;
font-size: 20px;

background: #FFFFFF;
border-radius: 5px;

}

& .erro span{
margin:11.5rem 5px 10px 5px;

	 }
}











.email {

	& span{
width: 68px;
height: 30px;
left: 27px;
top: 2746px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
color: #FFFFFF;
	}


	& input{
		position: absolute;
width: 321px;
height: 65px;
left: 27px;
top: 2795px;
font-size: 20px;

background: #FFFFFF;
border-radius: 5px;
	}

	& .erro span{
margin:11.5rem 5px 10px 5px;

	 }

}

.erro span{
		width: 100%;
color: #E01515;
font-size: 18px;
margin:365px 5px 10px 5px;

	 }


.containerCheck{

span {
width: 213px;
height: 30px;
left: 26px;
top: 2899px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height */
color: #FFFFFF;
}

}
#google{
	input{
			position: absolute;
width: 30px;
height: 23px;
left: 26px;
top: 2949px;

background: #FFFFFF;
border-radius: 3px;
	}



p{
	position: absolute;
width: 73px;
height: 30px;
left: 69px;
top: 2945px;
margin: 0;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #FFFFFF;
}

}
#rede-social{
input{
		position: absolute;
width: 30px;
height: 23px;
left: 26px;
top: 2991px;
margin: 0;

background: #FFFFFF;
border-radius: 3px;
}

p{
	position: absolute;
height: 30px;
left: 69px;
top: 2987px;
margin: 0;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #FFFFFF;
}
}

#indicacao{
	input{
			position: absolute;
width: 30px;
height: 23px;
left: 26px;
top: 3033px;
background: #FFFFFF;
border-radius: 3px;
	}


p{
	position: absolute;
width: 101px;
height: 30px;
left: 69px;
top: 3029px;
margin: 0;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #FFFFFF;
}

}




.funcionarios{
	p{
width: 249px;
height: 30px;
left: 29px;
top: 3085px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #FFFFFF;
	}

}

.decrement{

	left: 29px;
top: 3132px;

}

#value-employees{

	position: absolute;
width: 68px;
height: 41px;
left: 97px;
top: 3132px;

background: #FFFFFF;
border-radius: 4px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;

}


.increment{

	left: 181px;
top: 3132px;

}






#disabled ,#enable  {
	position: absolute;
width: 287px;
height: 65px;
left: 44px;
top: 3217px;

border-radius: 5px;

background: #D0B7DE;



font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #FFFFFF;

}



#enable{
	background: red;
}






input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;

}
input[type=number] {
   -moz-appearance: textfield;
   appearance: textfield;

}
`}
`;


