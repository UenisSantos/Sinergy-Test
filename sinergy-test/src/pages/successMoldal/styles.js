import styled, { css } from 'styled-components';

export const Successs = styled.div`
${() => css`
background: #DFDFDF;
width: 100%;
height: 60px;
overflow: hidden;
text-align: center;
margin: 2px auto 20px auto;

& span{
position: relative;
font-size: 18px;
margin:  auto;
width: 100%;
color: #3EA90B;
top:10px
}

`}
`;
