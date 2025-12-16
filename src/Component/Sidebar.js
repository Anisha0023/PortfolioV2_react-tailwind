// import { useState } from 'react';
// import { FiMenu, FiX } from 'react-icons/fi';
// import { useTheme } from '../Context/ThemeContext';

// function Sidebar() {
// 	const [open, setOpen] = useState(false);
// 	const {theme,toggleTheme } = useTheme();

// 	const menuItems = [
// 		{ name: 'About', link: '#about' },
// 		{ name: 'Projects', link: '#project' },
// 		{ name: 'Skills & Experience', link: '#experience' },
// 		{ name: 'Contact', link: '#contact' },
// 	];

// 	return (
// 		<>
// 			{/* DESKTOP */}
// 			<nav className="hidden md:flex w-full bg-yellow-500 items-center py-6 px-20 gap-10 text-lg font-medium">
// 				<span className="font-bold text-xl bg-yellow-500">Logo</span>
// 				<div className="flex gap-10 ml-auto bg-yellow-500">
// 					{menuItems.map((item) => (
// 						<a
// 							key={item.name}
// 							href={item.link}
// 							className="hover:text-black/70 bg-yellow-500">
// 							{item.name}
// 						</a>
// 					))}
// 				</div>
// 			</nav>

// 			{/* MOBILE  */}
// 			<div className="flex md:hidden w-full justify-between items-center bg-yellow-500 py-4 px-6">
// 				<span className="font-bold text-xl">Logo</span>
// 				<FiMenu
// 					size={28}
// 					onClick={() => setOpen(true)}
// 					className="cursor-pointer"
// 				/>
// 			</div>

// 			{/* OVERLAY */}
// 			<div
// 				className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
// 					open ? 'opacity-100 visible' : 'opacity-0 invisible'
// 				}`}
// 				onClick={() => setOpen(false)}></div>

// 			{/* SIDEBAR */}
// 			<div
// 				className={`fixed top-0 left-0 w-64 h-full bg-white z-50 transform transition-transform duration-300 shadow-lg ${
// 					open ? 'translate-x-0' : '-translate-x-full'
// 				}`}>
// 				{/* CLOSE ICON */}
// 				<div className="p-4 flex justify-end">
// 					<FiX
// 						size={26}
// 						onClick={() => setOpen(false)}
// 						className="cursor-pointer"
// 					/>
// 				</div>

// 				{/* MENU ITEMS FOR MOBILE */}
// 				<ul className="flex flex-col gap-6 p-4 text-lg ">
// 					{menuItems.map((item) => (
// 						<li
// 							key={item.name}
// 							className="hover:bg-yellow-500 hover:rounded max-w-full">
// 							<a
// 								href={item.link}
// 								onClick={() => setOpen(false)}
// 								className="">
// 								{item.name}
// 							</a>
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 		</>
// 	);
// }

// export default Sidebar;

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from '../Context/ThemeContext';

function Sidebar() {
	const [open, setOpen] = useState(false);
	const { theme, toggleTheme } = useTheme();

	const menuItems = [
		{ name: 'About', link: '#about' },
		{ name: 'Projects', link: '#project' },
		{ name: 'Skills & Experience', link: '#experience' },
		{ name: 'Contact', link: '#contact' },
	];

	return (
		<>
			{/* DESKTOP NAVBAR */}
			<nav
				className="hidden md:flex w-full items-center py-5 px-20 gap-10
				bg-yellow-500 dark:bg-gray-900
				text-black dark:text-gray-100
				font-medium transition-colors">
				<span className="font-bold text-xl">Logo</span>

				<div className="flex gap-10 ml-auto items-center">
					{menuItems.map((item) => (
						<a
							key={item.name}
							href={item.link}
							className="hover:text-black/70 dark:hover:text-yellow-400 transition">
							{item.name}
						</a>
					))}

					{/* THEME TOGGLE */}
					<button
						onClick={toggleTheme}
						className="p-2 rounded-full bg-black/10 dark:bg-white/10">
						{theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
					</button>
				</div>
			</nav>

			{/* MOBILE HEADER */}
			<div
				className="flex md:hidden w-full justify-between items-center py-4 px-6
				bg-yellow-500 dark:bg-gray-900
				text-black dark:text-gray-100 transition-colors">
				<span className="font-bold text-xl">Logo</span>

				<div className="flex items-center gap-4">
					<button
						onClick={toggleTheme}
						className="p-2 rounded-full bg-black/10 dark:bg-white/10">
						{theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
					</button>

					<FiMenu
						size={28}
						onClick={() => setOpen(true)}
						className="cursor-pointer"
					/>
				</div>
			</div>

			{/* OVERLAY */}
			<div
				className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity
				${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
				onClick={() => setOpen(false)}
			/>

			{/* MOBILE SIDEBAR */}
			<div
				className={`fixed top-0 left-0 w-64 h-full z-50 transform transition-transform duration-300
				bg-white dark:bg-gray-900
				text-gray-900 dark:text-gray-100
				shadow-lg
				${open ? 'translate-x-0' : '-translate-x-full'}`}>
				{/* CLOSE ICON */}
				<div className="p-4 flex justify-end">
					<FiX
						size={26}
						onClick={() => setOpen(false)}
						className="cursor-pointer"
					/>
				</div>

				{/* MENU ITEMS */}
				<ul className="flex flex-col gap-6 p-4 text-lg">
					{menuItems.map((item) => (
						<li key={item.name}>
							<a
								href={item.link}
								onClick={() => setOpen(false)}
								className="block px-4 py-2 rounded
								hover:bg-yellow-500 dark:hover:bg-gray-800 transition">
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default Sidebar;


