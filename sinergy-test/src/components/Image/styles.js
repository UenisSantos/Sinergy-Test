import styled, { css } from 'styled-components';

export const Image = styled.img`
${({ theme }) => css`
position: absolute;

//logo
&.logo{

	height: ${theme.sizes.medium};
	width: 14.0rem;
     left: ${theme.sizes.smaller};
     top: ${theme.sizes.small};
}


${theme.breakpoints.lg}{

	&.logo{
		left:8.1rem;
	}
}


${theme.breakpoints.xl}{


	&.logo{
	}
}
`}
`;
