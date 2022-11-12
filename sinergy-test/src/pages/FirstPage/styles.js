import styled, { css } from 'styled-components';

export const FirstPage = styled.div`
${({ theme }) => css`
width: 100%;
height: 820px;
text-align: center;
justify-content: center;
display:flex;
flex-direction: column;
background: ${theme.colors.primaryColor};




`}
`;
