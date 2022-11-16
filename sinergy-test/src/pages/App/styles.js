import styled, { css } from 'styled-components';

export const App = styled.div`
${({ theme }) => css`





${theme.breakpoints.max}{


	.side{

	display: grid;
	grid-template-columns: 1fr 1fr;

}

}


`}
`;
