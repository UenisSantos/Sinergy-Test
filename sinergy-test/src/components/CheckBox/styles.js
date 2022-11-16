import styled, { css } from 'styled-components';

export const CheckBox = styled.li`
${({ theme }) => css`

display: flex;
flex-direction: row-reverse;
padding-left: 10%;
justify-content: left;
align-items: flex-start;
width: 80%;
margin: 0 190px 0 auto;
margin-left:-40px;

input{
 width: 30px;
height: 23px;
border-radius: 3px;

}
#indicacao,
#google,
#rede-social{
margin-left: 10px;

}










${theme.breakpoints.lg}{



}

${theme.breakpoints.xmax}{

/* margin-left: 350px;
 */
}



`}
`;
