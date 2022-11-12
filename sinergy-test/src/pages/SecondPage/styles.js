import styled, { css } from 'styled-components';

export const SecondPage = styled.div`
${({ theme }) => css`
display: flex;
flex-direction: column;
margin-top:820px;
background-color: ${theme.colors.secundaryColor};
width: 100%;
height: 1036px;

h2{

top: 885px;
}

p{


top: 1062px;

}

img{

position: absolute;
width: 300px;
height: 300px;
left: 76px;
top: 1518px;

}



`}
`;
