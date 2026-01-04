import { useState } from 'react';
import resume from '../assets/Documents/AnishaJK_Resume.pdf';
import userImage from '../assets/images/anisha.jpg';
import { ChevronDown } from 'lucide-react';

export default function About() {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className="p-2 flex items-center">
			<div className="w-full flex flex-col lg:flex-row items-center lg:items-start relative justify-around px-4 lg:px-20 gap-10">
				{/* LEFT CONTENT */}
				<div className="flex flex-col max-w-xl gap-5 mt-5">
					<h1 className="font-bold text-4xl font-serif tracking-wider dark:slate-50">
						About Me
					</h1>

					{/* Always visible - Shorter intro */}
					<div className="space-y-4">
						<p className="text-gray-700 dark:text-slate-300 font-inter text-base lg:text-lg leading-relaxed">
							I'm <strong>Anisha J K</strong>, a Full Stack Developer
							specializing in <strong>React and .NET</strong> for enterprise
							applications. I build <strong>scalable ERP systems</strong> —
							including operational, order, and HR modules — focusing on
							automation, real-time dashboards, and clean architecture.
						</p>

						<p className="text-gray-700 dark:text-slate-300 font-inter text-base lg:text-lg leading-relaxed">
							I transform complex business workflows into intuitive interfaces
							and reliable APIs, ensuring performance, usability, and data
							integrity across the stack.
						</p>
					</div>

					{/* Expandable content for mobile */}
					{expanded && (
						<div className="lg:hidden space-y-4 animate-fadeIn">
							<p className="text-gray-700 dark:text-slate-300 font-inter text-base leading-relaxed">
								I hold a B.E. in Computer Science (2024) and honed my skills at
								PySpiders through hands-on projects with React, Django, Python,
								and SQL.
							</p>

							<p className="text-gray-700 dark:text-slate-300 font-inter text-base leading-relaxed">
								Currently expanding my expertise in{' '}
								<strong>
									TypeScript, advanced React patterns, and cloud-ready solutions
								</strong>{' '}
								to build even more robust applications.
							</p>

							<p className="text-gray-700 dark:text-slate-300 font-inter text-base leading-relaxed">
								I'm passionate about solving real-world problems through
								thoughtful design and reliable full-stack development.
							</p>
						</div>
					)}

					{/* Desktop: Always visible */}
					<div className="hidden lg:block space-y-4">
						<p className="text-gray-700 dark:text-slate-300 font-inter text-lg leading-relaxed">
							I hold a B.E. in Computer Science (2024) and honed my skills at
							PySpiders through hands-on projects with React, Django, Python,
							and SQL.
						</p>

						<p className="text-gray-700 dark:text-slate-300 font-inter text-lg leading-relaxed">
							Currently expanding my expertise in{' '}
							<strong>
								TypeScript, advanced React patterns, and cloud-ready solutions
							</strong>{' '}
							to build even more robust applications.
						</p>

						<p className="text-gray-700 dark:text-slate-300 font-inter text-lg leading-relaxed">
							I'm passionate about solving real-world problems through
							thoughtful design and reliable full-stack development.
						</p>
					</div>

					<button
						onClick={() => setExpanded(!expanded)}
						className="lg:hidden font-semibold self-start">
						<span className="flex items-center gap-1 text-gray-400 dark:text-slate-400">
							{expanded ? 'Read less' : 'Read more'}
							<ChevronDown
								className={`transition-transform duration-300 ${
									expanded ? 'rotate-180' : ''
								}`}
							/>
						</span>
					</button>

					{/* Resume Button */}
					<div className="flex gap-4 mt-5">
						<a
							href={resume}
							target="_blank"
							rel="noopener noreferrer"
							className="btn-default dark:text-black flex items-center gap-2 justify-center bg-yellow-400 border-none">
							Resume
						</a>
					</div>
				</div>

				{/* RIGHT IMAGE */}
				<div className="flex justify-center lg:justify-end w-full lg:w-auto">
					<img
						className="border-yellow-500 mr-10 shadow-lg rounded-[40%] max-w-[250px] lg:max-w-[450px]"
						src={userImage}
						alt="Profile_image"
					/>
				</div>
			</div>
		</div>
	);
}
