import React, { useState } from 'react';
import {
	MdWork,
	MdLocationOn,
	MdDateRange,
	MdCheckCircle,
	MdStar,
} from 'react-icons/md';
import matt from '../assets/images/Matt.png'
import srishti from '../assets/images/srishti.png';
import py from '../assets/images/py.png';
import gtc from '../assets/images/gtc.png';

const Experience = () => {
	const [experiences, setExperiences] = useState([
		{
			id: 1,
			company: 'GreenTop Information Technology',
			logo: gtc,
			position: 'Full Stack Developer',
			duration: 'Feb 2025 - Present (10 m)',
			location: 'Nithiravilai, Kk Dist, India',
			type: 'Full-Time',
			verified: true,
			featured: true,
		},
		{
			id: 2,
			company: 'PySPiders',
			logo: py,
			position: 'Full Stack Developer Learner',
			duration: 'July 2024 - Feb 2025 (8 m)',
			location: 'Bengaluru, India',
			type: 'Full-Time',
			verified: true,
			featured: false,
		},
		{
			id: 3,
			company: 'Srishti Innovative',
			logo: srishti,
			position: 'Pthon Learner',
			duration: 'Jul 2019 - Apr 2021 (1 m)',
			location: 'Thiruvanathapuram, India',
			type: 'Internship',
			verified: true,
			featured: false,
		},
		{
			id: 4,
			company: 'MATT Engineering Solutions',
			logo: matt,
			position: 'Learner',
			duration: 'Dec 2018 - Jun 2019 (1 m)',
			location: 'Nagercoil, India',
			type: 'Internship',
			verified: true,
			featured: false,
		},
	]);

	return (
		<div className="min-h-screen p-8 flex items-center">
			{/* Experience Content */}
			<div className="w-full flex flex-col lg:flex-row items-center lg:items-start mt-10 relative justify-around px-4 lg:px-20 gap-10">
				<h1 className="font-bold text-4xl font-serif tracking-wider">
					Experience
				</h1>

				<div className="space-y-6">
					{experiences.map((exp, index) => (
						<div
							key={exp.id}
							className="relative">
							{index < experiences.length - 1 && (
								<div className="absolute left-6 top-16 w-0.5 h-24 bg-gray-200"></div>
							)}

							<div className="flex gap-4 group">
								<div className="flex-shrink-0">
										<img
											className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl shadow-md"
											src={exp.logo}
										/>
								</div>

								<div className="flex-1 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
									<div className="flex  items-start justify-between">
										<div className="flex-1 bg-white">
											<h3 className="text-xl bg-white font-bold text-gray-900 mb-1">
												{exp.company}
											</h3>
											<div className="flex items-center gap-2 mb-2 bg-white">
												<h4 className="text-lg bg-white font-semibold text-gray-700">
													{exp.position}
												</h4>
												{exp.verified && (
													<MdCheckCircle className="w-5 h-5 text-green-500 bg-white" />
												)}
												{exp.featured && (
													<MdStar className="w-5 h-5 text-yellow-500 bg-white" />
												)}
											</div>
											<div className="flex flex-wrap gap-4 text-sm text-gray-600 bg-white">
												<div className="flex items-center gap-1">
													<MdDateRange className="w-4 h-4 bg-white" />
													<span className="bg-white">{exp.duration}</span>
												</div>
												<div className="flex items-center gap-1">
													<MdLocationOn className="w-4 h-4 bg-white" />
													<span className="bg-white">{exp.location}</span>
												</div>
												<div className="flex items-center gap-1">
													<MdWork className="w-4 h-4 bg-white" />
													<span className="bg-white">{exp.type}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
