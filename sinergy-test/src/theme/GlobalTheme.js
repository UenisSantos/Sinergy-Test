import { createGlobalStyle, css } from "styled-components";

export const GlobalTheme = createGlobalStyle`

${() => css`




*{
	margin:0 ;
	padding:0 ;
	box-sizing:border-box ;
	font-size:62.5% ;

//font-size com 64.5% permite usar rem igual px
//1.0rem= 10px

},


html{

h2,p{
	color: #FFFFFF;

}

h2{
	font-weight:800;
	line-height: 4.5rem;

}

p{
	font-weight: 400;
	line-height: 3.8rem;

}



}




`}


`



