import Project1 from './../assets/images/Project_1.png';
import Project2 from './../assets/images/Project_2.png';

export default function Projects() {
	const projectData = [
		{
			title: 'MagicPin Replica Website',
			desc: 'I created this personal project in order to show how to create an interface using a portfolio as an example.',
			image: Project1,
			link: '#',
		},
		{
			title: 'Personnel Portfolio',
			desc: 'I created this personal project in order to show how to create an interface using a portfolio as an example.',
			image: Project2,
			link: '#',
		},
	];

	return (
		<div className="w-full py-5 flex flex-col items-center">
			<h1 className="font-serif font-bold text-4xl">Projects</h1>

			<div className="flex flex-col gap-16 mt-12 w-11/12 max-w-4xl">
				{projectData.map((project, index) => (
					<div
						key={index}
						className={`bg-white rounded-3xl shadow-lg p-10 flex flex-col gap-8 items-center
							${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
						`}>
						{/* LEFT/RIGHT CONTENT */}
						<div className="md:w-1/2 flex flex-col justify-center bg-white">
							<h2 className="text-4xl font-serif font-semibold mb-4 bg-white">
								{project.title}
							</h2>

							<p className="mb-6 leading-relaxed bg-white">{project.desc}</p>

							<a
								href={project.link}
								className="border border-gray-700 max-w-50 bg-white px-6 py-2 rounded-full hover:bg-yellow-500 transition">
								View Project
							</a>
						</div>

						{/* IMAGE */}
						<div className="md:w-1/2 bg-white">
							<img
								src={project.image}
								alt={project.title}
								className="rounded-3xl w-full h-[220px] object-cover"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
