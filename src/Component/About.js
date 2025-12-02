import resume from '../assets/Documents/AnishaJKResume.pdf';
import userImage from '../assets/images/anisha.jpg'

export default function About() {
    return (
			<div
				className="min-h-screen p-8 flex items-center">
				<div className="w-full flex flex-col lg:flex-row items-center lg:items-start mt-10 relative justify-around px-4 lg:px-20 gap-10">
					<div className="flex flex-col max-w-xl gap-5 mt-5">
						<h1 className="font-bold text-4xl font-serif tracking-wider">
							About Me
						</h1>

						<p className="text-gray-600 font-inter text-lg leading-relaxed max-w-xl">
							Hello! I’m Anisha JK — a Full Stack Developer who loves turning
							ideas into clean, responsive, and engaging digital experiences.
						</p>
						<p className="text-gray-600 font-inter text-lg leading-relaxed max-w-xl">
							I specialize in React, .NET, JavaScript, HTML, CSS, and I’m
							passionate about building interfaces that feel smooth, modern, and
							intuitive.
						</p>
						<p className="text-gray-600 font-inter text-lg leading-relaxed max-w-xl">
							I graduated with a B.E. in Computer Science (2024) and enhanced my
							skills at PySpiders, where I worked on real, hands-on projects
							across React, Django, Python, and SQL.
						</p>
						<p className="text-gray-600 font-inter text-lg leading-relaxed max-w-xl">
							Right now, I’m leveling up my skills in TypeScript, advanced
							React, and full-stack architecture.
						</p>

						<div className="flex gap-4 mt-5">
							<a
								href={resume}
								className="btn-default flex items-center gap-2 justify-center bg-yellow-500 border-none">
								Resume
							</a>
						</div>
					</div>

					{/* RIGHT IMAGE SECTION */}
					<div className="flex justify-center lg:justify-end w-full lg:w-auto">
						<img
							className="border-yellow-500 mr-10 rounded-[40%] max-w-[250px] lg:max-w-[450px]"
							src={userImage}
							alt="Profile_image"
						/>
					</div>
				</div>
			</div>
		);
}