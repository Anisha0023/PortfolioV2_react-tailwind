import resume from '../assets/Documents/AnishaJK_Resume.pdf';
import userImage from '../assets/images/anisha.jpg';

export default function About() {
	return (
		<div className="p-8 flex items-center">
			<div className="w-full flex flex-col lg:flex-row items-center lg:items-start relative justify-around px-4 lg:px-20 gap-10">
				<div className="flex flex-col max-w-xl gap-5 mt-5">
					<h1 className="font-bold text-4xl font-serif tracking-wider">
						About Me
					</h1>

					<p className="text-gray-600 dark:text-white font-inter text-lg leading-relaxed max-w-xl">
						I’m Anisha J K, a Full Stack Developer with hands-on experience
						building responsive, production-ready web applications.
					</p>
					<p className="text-gray-600 dark:text-white font-inter text-lg leading-relaxed max-w-xl">
						My core expertise lies in React and .NET, where I focus on writing
						clean, maintainable code and creating user interfaces that balance
						performance and usability.
					</p>
					<p className="text-gray-600 dark:text-white font-inter text-lg leading-relaxed max-w-xl">
						I hold a B.E. in Computer Science (2024) and strengthened my
						practical skills at PySpiders by working on real-world projects
						using React, Django, Python, and SQL.
					</p>
					<p className="text-gray-600 dark:text-white font-inter text-lg leading-relaxed max-w-xl">
						Currently, I’m deepening my knowledge in TypeScript, advanced React
						patterns, and full-stack architecture to build scalable
						applications.
					</p>
					<p className="text-gray-600 dark:text-white font-inter text-lg leading-relaxed max-w-xl">
						I enjoy solving real business problems through thoughtful UI design
						and reliable backend integration.
					</p>

					<div className="flex gap-4 mt-5">
						<a
							href={resume}
							target="blank"
							className="btn-default dark:text-black flex items-center gap-2 justify-center bg-yellow-500 border-none">
							Resume
						</a>
					</div>
				</div>

				{/* RIGHT IMAGE SECTION */}
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
