import styled, { css } from 'styled-components';

export const ThirdPage = styled.div`
${({ theme }) => css`
width: 100%;
height: 49.2rem;
text-align: center;
background:${theme.colors.primaryColor};
position: relative;
overflow: hidden;


P{
	position: relative;
width:382px ;
font-size:${theme.sizes.small};
line-height: 45px;
margin: 0 auto 0 auto;
top: 30px;
};



img{
	position: relative;
width: 250px;
height: 250px;
margin: 129px auto 0 auto ;

}

${theme.breakpoints.sm}{



}

${theme.breakpoints.lg}{
	align-items: center;
p{
	width:382px;
/* 	left: 20%;
 */}

	img{
width: 300px;
height:300px;
bottom: 43px;
}

}


${theme.breakpoints.max}{
height: 976px;

p{
	font-size: 30px;
line-height: 45px;
}


img{
	width: 600px;
height: 600px;
bottom: 20px;
}
}



`}
`;
