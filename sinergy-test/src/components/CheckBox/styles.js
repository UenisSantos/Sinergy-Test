import styled, { css } from 'styled-components';

export const CheckBox = styled.li`
${({ theme }) => css`

display: flex;
flex-direction: row-reverse;

justify-content: left;
align-items: flex-start;

input{
margin-left: 27px;
width: 30px;
height: 23px;
border-radius: 3px;
}


#google,
#rede-social,
#indicacao
{
margin-right:-140px;
font-size: 20px;

}

${theme.breakpoints.lg}{

margin-left: 220px;

}

${theme.breakpoints.xmax}{

margin-left: 290px;

}



`}
`;
