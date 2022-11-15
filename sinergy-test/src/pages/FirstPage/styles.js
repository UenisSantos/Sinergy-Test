import styled, { css } from 'styled-components';

export const FirstPage = styled.div`
${({ theme }) => css`
width: 100%;
height: 85.0rem;
background: ${theme.colors.primaryColor};
position:relative;



& :nth-child(2){
	top: 12.0rem;
	width: 33.0rem;
}



& :nth-child(3){
    top: 16.4rem;
    width: 28.4rem;
}



p{
    margin: 0 27px 0 25px;
    top: 25.5rem;
    width: 310px;
    height: 228px;
}


img{
	height: ${theme.sizes.big};
	top: 52.1rem;
	right: 10%;
}




${theme.breakpoints.lg}{

h2{
	font-size: 4.0rem;
  width: 100%;

}
& :nth-child(2){
	width: 100%;

}

	& :nth-child(3){
		width: 59.0rem;

	}


	p{
		left:71px ;
		width: 334px;
height: 118px;
		font-size: 2.7rem};


img{
top: 38.1rem;
height: 400px;
width: 400px;

}


	}




	${theme.breakpoints.xl}{

h2{
font-size: 8.0rem;
line-height: 12.0rem;
left: 7.1rem;

}

		& :nth-child(2){
width: 899px;
height: 120px;

		}

& :nth-child(3){
width: 590px;
height: 120px;
left: 71px;
top: 221px;

		}

p{
width: 514px;
height: 135px;
left: 72px;
top: 367px;
font-size: 30px;
line-height: 45px;



}

img{
	height: 600px;
width: 600px;
left:55%;
top: 155px;


}

	}




	${theme.breakpoints.xmax}{
p{
width: 650px;
}




	}







`}
`;
