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




`}
`;
