import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/App/App';
import reportWebVitals from './reportWebVitals';
import { theme } from './theme/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalTheme } from './theme/GlobalTheme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>

		<ThemeProvider theme={theme}>

			<GlobalTheme></GlobalTheme>
			<App />

		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
