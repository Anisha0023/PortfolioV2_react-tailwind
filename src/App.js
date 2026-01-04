import { useEffect, useState } from 'react';
import './App.css';
import Home from './Component/Home.js';
import Sidebar from './Component/Sidebar.js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from './Component/Footer.js';

function App() {
	useEffect(() => {
		Aos.init({
			duration: 1000,
			once: false,
			easing: 'ease-in-out',
			offset: 120,
		});
	}, []);

	return (
		<>
			<Sidebar />
			<Home />
			<Footer />
		</>
	);
}

export default App;
