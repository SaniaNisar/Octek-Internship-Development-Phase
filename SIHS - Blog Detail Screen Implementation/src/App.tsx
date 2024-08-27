import './App.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './core/theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './core/routes';
import { Provider } from 'react-redux';
import { store } from './core/redux/store';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<RouterProvider router={createBrowserRouter(routes.flat())} />
			</Provider>
		</ThemeProvider>
	);
}

export default App;
