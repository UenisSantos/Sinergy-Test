import styled, { css } from 'styled-components';

export const ThirdPage = styled.div`
${({ theme }) => css`
width: 100%;
height: 492px;

background:${theme.colors.primaryColor};



P{
	width: 332px;
height: 90px;
top: 1917px;

font-style: normal;
font-size: 30px;
line-height: 45px;

};



img{
	position: absolute;
width: 250px;
height: 250px;
left: 63px;
top: 2055px;
}



`}
`;
