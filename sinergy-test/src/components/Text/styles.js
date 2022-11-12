import styled, { css } from 'styled-components';


const Sizes = {

	smaller: (theme) => css`
	  font-size:${theme.sizes.smaller};
margin: 0 2.7rem 0${theme.sizes.smaller};


	`,
	small: (theme) => css`
	font-size: ${theme.sizes.small} ;
        line-height: 4.5rem;
	   margin: 0  5.0rem 0 ${theme.sizes.smaller}  ;
        top: 120px;

/*         left: 25px;
 */	`,
	medium: (theme) => css`font-size:	${theme.sizes.medium}
	`,
	big: (theme) => css`	font-size:${theme.sizes.big}
	`,
	huge: (theme) => css`font-size:	${theme.sizes.huge}
	`,




}




export const Text = styled.p`
${({ size, theme }) => css`
${Sizes[size](theme)}
position: absolute;

















`}
`;
