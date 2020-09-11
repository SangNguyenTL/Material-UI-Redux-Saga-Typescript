import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import Loadding from './components/Loading';

function App() {
	const routing = useRoutes(routes);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Suspense fallback={<Loadding />}>{routing}</Suspense>
		</ThemeProvider>
	);
}

export default App;
