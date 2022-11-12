import styled, { css } from 'styled-components';

export const Image = styled.img`
${({ theme }) => css`
position: absolute;

//logo
&.logo{

	height: ${theme.sizes.medium};
     left: ${theme.sizes.smaller};
     top: ${theme.sizes.small};
}




&.firstImage{
	height: ${theme.sizes.big};
	top: 521px;
	left: 6.3rem;
}

`}
`;
