import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Sidebar() {
	const [open, setOpen] = useState(false);

	const menuItems = [
		{ name: 'About', link: '#about' },
		{ name: 'Projects', link: '#projects' },
		{ name: 'Contact', link: '#contact' },
	];

	return (
		<>
			{/* DESKTOP */}
			<nav className="hidden md:flex w-full bg-yellow-500 items-center py-6 px-20 gap-10 text-lg font-medium">
				<span className="font-bold text-xl">Logo</span>
				<div className="flex gap-10 ml-auto">
					{menuItems.map((item) => (
						<a
							key={item.name}
							href={item.link}
							className="hover:text-black/70">
							{item.name}
						</a>
					))}
				</div>
			</nav>

			{/* MOBILE  */}
			<div className="flex md:hidden w-full justify-between items-center bg-yellow-500 py-4 px-6">
				<span className="font-bold text-xl">Logo</span>
				<FiMenu
					size={28}
					onClick={() => setOpen(true)}
					className="cursor-pointer"
				/>
			</div>

			{/* OVERLAY */}
			<div
				className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
					open ? 'opacity-100 visible' : 'opacity-0 invisible'
				}`}
				onClick={() => setOpen(false)}></div>

			{/* SIDEBAR */}
			<div
				className={`fixed top-0 left-0 w-64 h-full bg-white z-50 transform transition-transform duration-300 shadow-lg ${
					open ? 'translate-x-0' : '-translate-x-full'
				}`}>
				{/* CLOSE ICON */}
				<div className="p-4 flex justify-end">
					<FiX
						size={26}
						onClick={() => setOpen(false)}
						className="cursor-pointer"
					/>
				</div>

				{/* MENU ITEMS FOR MOBILE */}
				<ul className="flex flex-col gap-6 p-4 text-lg">
					{menuItems.map((item) => (
						<li key={item.name}>
							<a
								href={item.link}
								onClick={() => setOpen(false)}
								className="hover:text-yellow-600">
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

