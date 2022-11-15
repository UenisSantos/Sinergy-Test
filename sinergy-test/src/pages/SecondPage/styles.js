import styled, { css } from 'styled-components';

export const SecondPage = styled.div`
${({ theme }) => css`
display: flex;
flex-direction: column;
background-color: ${theme.colors.secundaryColor};
width: 100%;
height: 1036px;
position: relative;
h2{
top: 45px;
width: 300px;

}

p{
	position: relative;
top: 242px;
}

 & :nth-child(3){
	top: 211px;

 }

img{

width: 30.0rem;
height: 3.0;
right: 0;
bottom: 38px;

}


${theme.breakpoints.lg}{

h2{
width: 500px;
height: 120px;
left: 7.2rem;
font-size: 4.0rem;

}

p{
	width: 340px;
height: 270px;
left: 7.2rem;
font-size: 2.7rem;

}

& :nth-child(3){
top: 58px;
width: 360px;
 }

img{
	bottom:38px ;
	height:400px;
	width: 400px;
}

}




${theme.breakpoints.xl}{
height: 800px;

	h2{
width: 1046px;
font-size: 8.0rem;
line-height: 80px;
margin-left: 72px;

}



p{
width: 550px;
height: 270px;
font-size:30px;
margin-left: 72px;

}
& :nth-child(3){
width:560px;
height: 270px;
top: 20px;
 }

img{
	height:600px;
	width: 600px;
}



}



${theme.breakpoints.xmax}{

P{

}


& :nth-child(3){
 }


}


`}
`;
