import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './router/App';
import { AuthProvider } from './context/AuthContext';

const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);

rootElement.render(
	<AuthProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</AuthProvider>
);