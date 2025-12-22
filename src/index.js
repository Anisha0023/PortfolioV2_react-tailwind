import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Particles from './UI/Particles';
import { ThemeProvider } from './Context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider>

		<Particles
			particleColors={['#ffffff', '#ffffff']}
			particleCount={200}
			particleSpread={25}
			speed={0.1}
			particleBaseSize={100}
			moveParticlesOnHover={true}
			alphaParticles={false}
			disableRotation={false}>
			<App />
		</Particles>
				</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
