import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { RiTodoLine } from 'react-icons/ri';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import { Player } from '@lottiefiles/react-lottie-player';
import homeAnimation from '../assets/lottieAnimationImg/uiux designer.json';
import { useEffect, useState } from 'react';
import {
	CheckSquare,
	Code,
	Users,
	Zap,
	ChevronLeft,
	ChevronRight,
} from 'lucide-react';
function Home() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const highlights = [
		{
			icon: <Code className="w-12 h-12" />,
			title: 'Clean Code Advocate',
			description:
				'Writing maintainable, scalable code following SOLID principles and best practices',
		},
		{
			icon: <Zap className="w-12 h-12" />,
			title: 'Performance Optimizer',
			description:
				'Delivering fast, efficient applications with optimized rendering and API calls',
		},
		{
			icon: <Users className="w-12 h-12" />,
			title: 'User-Centric Design',
			description:
				'Creating intuitive interfaces that prioritize user experience and accessibility',
		},
		{
			icon: <CheckSquare className="w-12 h-12" />,
			title: 'Agile Enthusiast',
			description:
				'Thriving in collaborative environments with iterative development and continuous improvement',
		},
	];

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % highlights.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + highlights.length) % highlights.length
		);
	};

	// Auto-play carousel
	useEffect(() => {
		const timer = setInterval(() => {
			nextSlide();
		}, 5000);
		return () => clearInterval(timer);
	}, []);
	return (
		<>
			<div
				data-aos="fade-bottom"
				className="w-full flex flex-col lg:flex-row items-start justify-between px-8 mt-20 gap-10">
				<div className="max-w-xl flex flex-col gap-5">
					<h3 className="text-yellow-500 text-xl font-semibold tracking-wider">
						FULL STACK DEVELOPER
					</h3>

					<h1 className="font-serif text-4xl font-bold leading-tight">
						Hello, I'm Anisha J K
					</h1>

					<p className="text-gray-600 dark:text-white font-inter text-lg leading-relaxed">
						Specialized in building modern React frontends backed by robust .NET
						APIs, delivering clean architecture and intuitive user experiences.
					</p>
					<p className="mt-6 text-sm text-gray-500 max-w-lg">
						Currently working on scalable React and .NET applications in a
						production environment.
					</p>

					<div className="flex flex-wrap gap-4 mt-5">
						<a
							className="btn-default flex items-center gap-2 justify-center"
							target="blank">
							Projects <RiTodoLine />
						</a>

						<a
							href="https://www.linkedin.com/in/anisha-j-k-profile"
							className="btn-default flex items-center gap-2 justify-center"
							target="blank">
							LinkedIn <FaLinkedin />
						</a>

						<a
							href="https://github.com/Anisha0023"
							className="btn-default flex items-center gap-2 justify-center"
							target="blank">
							GitHub <FaGithub />
						</a>
					</div>
				</div>

				<div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
					<Player
						autoplay
						loop
						src={homeAnimation}
						style={{}}
					/>
					<div className="text-gray-400 text-sm">{/* Placeholder */}</div>
				</div>
			</div>
			<div className="w-full px-8 mt-20">
				<h2 className="text-3xl font-bold text-center mb-12">
					What I Bring to the Table
				</h2>

				<div className="relative max-w-4xl mx-auto">
					{/* Carousel */}
					<div className="overflow-hidden">
						<div
							className="flex transition-transform duration-500 ease-in-out"
							style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
							{highlights.map((highlight, index) => (
								<div
									key={index}
									className="w-full flex-shrink-0 px-4">
									<div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl border-t-4 border-yellow-500 text-center max-w-xl mx-auto">
										<div className="text-yellow-500 mb-6 flex justify-center">
											{highlight.icon}
										</div>
										<h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
											{highlight.title}
										</h3>
										<p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
											{highlight.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Navigation Buttons */}
					<button
						onClick={prevSlide}
						className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-all duration-300">
						<ChevronLeft className="w-6 h-6" />
					</button>
					<button
						onClick={nextSlide}
						className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-all duration-300">
						<ChevronRight className="w-6 h-6" />
					</button>
					<div className="flex justify-center gap-2 mt-8">
						{highlights.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentSlide(index)}
								className={`w-3 h-3 rounded-full transition-all duration-300 ${
									currentSlide === index
										? 'bg-yellow-500 w-8'
										: 'bg-gray-300 dark:bg-gray-600'
								}`}
							/>
						))}
					</div>
				</div>
			</div>

			<div
				data-aos="fade-right"
				id="about"
				className="mt-5 w-full scroll-mt-24">
				<About />
			</div>
			<div
				data-aos="fade-up"
				id="project"
				className="mt-5 w-full scroll-mt-24">
				<Projects />
			</div>
			<div
				data-aos="fade-right"
				id="experience"
				className="mt-5 w-full scroll-mt-24">
				<Experience />
			</div>
			<div
				data-aos="fade"
				id="contact"
				className="mt-5 w-full scroll-mt-24">
				<Contact />
			</div>
		</>
	);
}

export default Home;
