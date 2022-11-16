import styled, { css } from 'styled-components';

export const FourtPage = styled.div`
${({ theme }) => css`
width: 100%;
background-color: ${theme.colors.secundaryColor};
text-align: center;
position: relative;
height: 976px;
overflow: hidden;


h3{
	position: relative;
width: 325px;
line-height: 45px;
font-size: 30px;
margin:0 auto 0 auto;
top: 59px;
}



.name{
& span{
margin: 100px 182px 0 0px;
font-size: 20px;
width: 136px;
line-height: 30px;
}

& input{
width: 321px;
height: 65px;
font-size: 20px;
border-radius: 5px;
margin:129px auto 0 auto;

}

}




.email {

	& span{
margin: 0 272px 0 0px;
font-size: 20px;
line-height: 30px;

	}


	& input{
		width: 321px;
height: 65px;
font-size: 20px;
border-radius: 5px;
margin:30px auto 0 auto;

	}



}

.erro span{
	font-size: 18px;
	margin:5px  auto 10px  auto;
width: 100%;
	position: relative;
color: #E01515;
left:5px;
	 }


.containerCheck{
width: 321px;
margin: 5px auto 5px auto ;

p{

width:200px;
right: 130px;
}


& :nth-child(1) {
position: relative;
font-size: 20px;
line-height: 30px;
margin: 15px 9px 15px auto ;

}

}


.title-funcionario{
height: 10px;
position: relative;
margin-right:150px;
	p{
font-size: 20px;
margin: 5px auto 0 auto;
width: 100%;
}

}


.funcionarios{

position: relative;
display: flex;
flex-direction: row;
gap:20px;
margin:47px auto 27px auto ;
width: 250px;
right: 8%;
}

#value-employees{
text-align: center;
width: 68px;
height: 41px;
border-radius: 4px;


}




#disabled ,#enable  {
width: 287px;
height: 65px;
border-radius: 5px;
background: #D0B7DE;
font-size: 20px;
line-height: 30px;
margin-right: 60px;
}



#enable{
	background: #8701CF;

	:hover{
		background: #9C04ED;
	}

}


${theme.breakpoints.lg}{


h3{

	left: 0;
	right: 0;
}



.funcionarios{
	right: 5%;

}


}

${theme.breakpoints.max}{
h3{
width: 420px;
}

.containerCheck{
	p{
width: 250px;
right: 90px;

	}
}


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


