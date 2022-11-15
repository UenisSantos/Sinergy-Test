import styled, { css } from 'styled-components';

export const FourtPage = styled.div`
${({ theme }) => css`
width: 100%;
background-color: ${theme.colors.secundaryColor};
text-align: center;
position: relative;
height: 976px;


h3{
width: 339px;
line-height: 45px;
font-size: 30px;
margin:59px auto 0 auto;
left: 27px;
}



.name{
& span{

margin: 240px 282px 0 0px;
font-size: 20px;
width: 166px;
line-height: 30px;

}

& input{
width: 321px;
height: 65px;
font-size: 20px;
border-radius: 5px;
margin:280px auto 0 auto;

}

}




.email {

	& span{
margin: 5px 182px 0 0px;
font-size: 20px;
line-height: 30px;

	}


	& input{
		width: 321px;
height: 65px;
font-size: 20px;
border-radius: 5px;
margin: 40px 27px 0 0px;
margin:40px auto 0 auto;

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
margin-top: 20px;
& :nth-child(1) {
position: relative;
font-size: 20px;
line-height: 30px;
margin: 29px 136px 0 20px ;


}

}


.title-funcionario{
	p{
font-size: 20px;

margin: 5px auto 0 27px;

}

}


.funcionarios{
position: relative;
display: flex;
flex-direction: row;
margin: -53px  142px 0 27px  ;
gap:20px;
margin:57px 152px 27px 27px ;

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


.title-funcionario{

margin-left: 210px;

}
.funcionarios{

	margin:57px 152px 27px 240px ;
}




}


${theme.breakpoints.xmax}{
	.title-funcionario{

margin-left: 290px;

}

.funcionarios{
	margin-left: 300px;

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


