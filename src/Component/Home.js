import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { RiTodoLine } from 'react-icons/ri';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import { Player } from '@lottiefiles/react-lottie-player';
import homeAnimation from '../assets/lottieAnimationImg/uiux designer.json';
function Home() {
	return (
		<>
			<div
				data-aos="fade-up"
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

					<div className="flex flex-wrap gap-4 mt-5">
						<a className="btn-default flex items-center gap-2 justify-center">
							Projects <RiTodoLine />
						</a>

						<a
							href="https://www.linkedin.com/in/anisha-j-k-profile"
							className="btn-default flex items-center gap-2 justify-center">
							LinkedIn <FaLinkedin />
						</a>

						<a
							href="https://github.com/Anisha0023"
							className="btn-default flex items-center gap-2 justify-center">
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

			<div
				data-aos="fade-right"
				id="about"
				className="mt-5 w-full">
				<About />
			</div>
			<div
				data-aos="fade-up"
				id="project"
				className="mt-5 w-full">
				<Projects />
			</div>
			<div
				data-aos="fade-right"
				id="experience"
				className="mt-5 w-full">
				<Experience />
			</div>
			<div
				data-aos="fade"
				id="contact"
				className="mt-5 w-full">
				<Contact />
			</div>
		</>
	);
}

export default Home;
